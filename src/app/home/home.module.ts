import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HomepageComponent,
    FeedComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild([
      {path: '' , redirectTo: '/home/all', pathMatch: 'full'},
      {path: 'all' , component: HomepageComponent},
      {path: 'following' , component: HomepageComponent},
      {path: 'newest' , component: HomepageComponent},
      {path: 'popular' , component: HomepageComponent}
    ])
  ]
})
export class HomeModule { }
