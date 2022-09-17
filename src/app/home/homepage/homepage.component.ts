import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, IUserFeed } from 'src/app/core/dataModels/users';
import { FeedsService } from '../feeds.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  feeds: Array<IUserFeed> = [];
  likedFeedsArr: Array<IUserFeed> = [];

  constructor(private feedsService: FeedsService, private router: Router) {}

  ngOnInit(): void {
    this.likedFeedsArr = this.getStoredLikedFeeds() ? this.getStoredLikedFeeds() : [];

    this.feedsService.getHomeFeeds().subscribe((feeds) => {
      if (this.likedFeedsArr.length !== 0) {
        this.feeds = feeds.map((feed: IUserFeed) => {
          let likedFound = this.likedFeedsArr.find(
            (likedFeed: IUserFeed) => likedFeed.feed_id === feed.feed_id
          );

          if (likedFound) {
            return {
              ...feed,
              liked: true,
              likes: feed.likes + 1,
            };
          } else {
            return feed;
          }
        });
      } else {
        this.feeds = feeds;
      }
      let currentPath = this.router.url.replace('/home/', '');

      switch (currentPath) {
        case 'following':
          this.feeds = this.getFollowedUsersFeeds(this.feeds);
          break;
        case 'popular':
          this.feeds = this.getPopularFeeds(this.feeds);
          break;
        case 'newest':
          this.feeds = this.getNewestFeeds(this.feeds);
          break;
        default:
          this.feeds = this.feeds;
      }
    });
  }

  storeOrUnstoreLike(feed: IUserFeed): void {

    let isLiked = this.likedFeedsArr.find(
      (likedFeed: IUserFeed) => likedFeed.feed_id === feed.feed_id
    );

    if (isLiked) {
      // here we want to remove it
      this.likedFeedsArr = this.likedFeedsArr.filter(
        (likedFeed: IUserFeed) => likedFeed.feed_id !== feed.feed_id
      );
      localStorage.setItem('likedFeeds', JSON.stringify(this.likedFeedsArr));
      // updating the feeds array to update the view
      this.addOrRemoveLike('removeLike', feed);
    } else {
      this.likedFeedsArr.push({ ...feed, liked: true, likes: feed.likes + 1 });
      localStorage.setItem('likedFeeds', JSON.stringify(this.likedFeedsArr));
      // updating feeds array to update the view
      this.addOrRemoveLike('addLike', feed);
    }
  }

  getStoredLikedFeeds() {
    let likedFeeds = localStorage.getItem('likedFeeds');
    if (likedFeeds) {
      // check if there is anything stored in localstorage
      let likedFeedsArr = JSON.parse(likedFeeds);
      return likedFeedsArr;
    } else {
      return null;
    }
  }

  addOrRemoveLike(addOrRemove: string, feed: IUserFeed) {
    this.feeds = this.feeds.map((feedItem) => {
      if (feedItem.feed_id === feed.feed_id) {
        return {
          ...feedItem,
          liked: addOrRemove === 'addLike' ? true : false,
          likes: addOrRemove === 'addLike' ? feed.likes + 1 : feed.likes - 1,
        };
      } else {
        return feedItem;
      }
    });
  }

  getNewestFeeds(feeds: Array<any>) {
    return feeds.sort((a, b) => {
      a.date = new Date(a.date);
      b.date = new Date(b.date);

      return b.date - a.date;
    });
  }

  getPopularFeeds(feeds: Array<IUserFeed>) { // popular is based on more likes
    return feeds.sort((a, b) => b.likes - a.likes);
  }

  getFollowedUsersFeeds(feeds: Array<IUserFeed>) {
    let followedUsers = localStorage.getItem("followedUsers");
    if (followedUsers) {
      // check if there is anything stored in localstorage
      let followedUsersArr = JSON.parse(followedUsers);

      let followedUsersFeed = feeds.filter( feed => {
        return followedUsersArr.find( (followedUser:IUser) => followedUser.id === feed.user_id );
      } )
      return followedUsersFeed;
    } else {
      return [];
    }

  }



}
