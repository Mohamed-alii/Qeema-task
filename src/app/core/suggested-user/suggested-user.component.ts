import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../dataModels/users';

@Component({
  selector: 'app-suggested-user',
  templateUrl: './suggested-user.component.html',
  styleUrls: ['./suggested-user.component.scss']
})
export class SuggestedUserComponent implements OnInit {

  @Output() suggestedUserInfo = new EventEmitter<IUser>();
  @Input() suggestedUser: any;

  constructor() { }

  ngOnInit(): void {}

  followUser(suggestedUser: IUser){
    this.suggestedUserInfo.emit(suggestedUser);
  }

}
