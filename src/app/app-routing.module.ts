import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';


const routes: Routes = [
  {path: '', loadChildren: () => HomeModule},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'messages', loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule)},
  {path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
  {path: 'savedposts', loadChildren: () => import('./saved-posts/saved-posts.module').then(m => m.SavedPostsModule)},
  {path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
