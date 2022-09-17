import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MessagesPageComponent } from './messages-page/messages-page.component';



@NgModule({
  declarations: [
    MessagesPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '' , component: MessagesPageComponent}
    ])
  ]
})
export class MessagesModule { }
