import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser, IUserStory } from './dataModels/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsersSuggestions():Observable<IUser[]>{
    return this.http.get<IUser[]>("../../assets/suggestions.json");
  }

  getUsersStoris():Observable<IUserStory[]>{
    return this.http.get<IUserStory[]>("../../assets/storiesUsers.json");
  }

}
