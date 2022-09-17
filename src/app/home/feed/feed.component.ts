import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCommentDots, faHeart } from '@fortawesome/free-solid-svg-icons';
import { IUserFeed } from 'src/app/core/dataModels/users';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {

  @Output() getFeedId = new EventEmitter<IUserFeed>();
  @Input() feed: any;
  faCommentDots = faCommentDots;
  faHeart = faHeart;

  constructor() {}

  ngOnInit(): void {}

  addLike(feed: IUserFeed): void {
    this.getFeedId.emit(feed);
  }
}
