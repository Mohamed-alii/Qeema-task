import { Component, OnInit } from '@angular/core';
import { faHouse, faCommentDots, faUser, faBookmark, faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  faHouse = faHouse;
  faCommentDots = faCommentDots;
  faUser = faUser;
  faBookmark = faBookmark;
  faGear = faGear;

  constructor() { }

  ngOnInit(): void {}

}
