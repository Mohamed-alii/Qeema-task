import { Component, OnInit } from '@angular/core';
import { IUserStory } from '../dataModels/users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  userStories: Array<IUserStory> = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsersStoris().subscribe( stories => {
      this.userStories = stories;
    } )
  }

}
