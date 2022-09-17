import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedPostsPageComponent } from './saved-posts-page/saved-posts-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SavedPostsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '' , component: SavedPostsPageComponent}
    ])
  ]
})
export class SavedPostsModule { }
