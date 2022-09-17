import { Component, OnInit } from '@angular/core';
import { IUser } from '../dataModels/users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-suggestions',
  templateUrl: './users-suggestions.component.html',
  styleUrls: ['./users-suggestions.component.scss']
})
export class UsersSuggestionsComponent implements OnInit {

  suggestedUsers: Array<IUser> = [];
  followedUsers: Array<IUser> = [];
  showAll: boolean = false;

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsersSuggestions().subscribe( suggestedUsers => {

      this.followedUsers = this.getStoredFollowedUsers() ? this.getStoredFollowedUsers() : [];

      if(this.followedUsers.length !== 0){
        this.suggestedUsers = suggestedUsers.map( (suggestedUser:IUser) => {
          let isUserFollowed = this.followedUsers.find((followedUser: IUser) => followedUser.id === suggestedUser.id);

          if(isUserFollowed){
            return {
              ...suggestedUser,
              followed: true
            }
          }else{
            return suggestedUser
          }
        } )

      }else{
        this.suggestedUsers = suggestedUsers;
      }

    } )
  }

  getSuggestedUser(suggestedUser:IUser){

    if(suggestedUser.followed){
      // remove it
      this.followedUsers = this.followedUsers.filter(
        (followedUsers: IUser) => followedUsers.id !== suggestedUser.id
      );
      localStorage.setItem('followedUsers' , JSON.stringify(this.followedUsers))
      this.storeOrRemoveFollowedUser(suggestedUser, 'remove')

    }else{
      this.followedUsers.push({...suggestedUser, followed: true});
      localStorage.setItem('followedUsers' , JSON.stringify(this.followedUsers))
      this.storeOrRemoveFollowedUser(suggestedUser , 'store');

    }

  }

  storeOrRemoveFollowedUser(suggestedUser:IUser , storeOrRemove: string){

      this.suggestedUsers = this.suggestedUsers.map( suggestedUserObj => {
        if(suggestedUserObj.id === suggestedUser.id){
          return {
            ...suggestedUserObj,
            followed: storeOrRemove === 'store' ? true : false
          }
        }else{
          return suggestedUserObj
        }
      } );

  }

  getStoredFollowedUsers() {
    let followedUsers = localStorage.getItem("followedUsers");
    if (followedUsers) {
      // check if there is anything stored in localstorage
      let followedUsersArr = JSON.parse(followedUsers);
      return followedUsersArr;
    } else {
      return null;
    }
  }


  showAllSuggestedUsers(){
    this.showAll = true;
  }

}
