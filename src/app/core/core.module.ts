import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { StoriesComponent } from './stories/stories.component';
import { StoryComponent } from './story/story.component';
import { UsersSuggestionsComponent } from './users-suggestions/users-suggestions.component';
import { SearchComponent } from './search/search.component';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { AccountComponent } from './account/account.component';
import { SuggestedUserComponent } from './suggested-user/suggested-user.component';
import { EmailTrimPipe } from './email-trim.pipe';



@NgModule({
  declarations: [
    NavBarComponent,
    StoriesComponent,
    StoryComponent,
    UsersSuggestionsComponent,
    SearchComponent,
    LatestPostsComponent,
    AccountComponent,
    SuggestedUserComponent,
    EmailTrimPipe
  ],
  exports: [
    NavBarComponent,
    StoriesComponent,
    UsersSuggestionsComponent,
    AccountComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class CoreModule { }
