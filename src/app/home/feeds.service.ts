import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserFeed } from '../core/dataModels/users';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {

  constructor(private http: HttpClient) { }

  getHomeFeeds():Observable<IUserFeed[]>{
    return this.http.get<IUserFeed[]>('../../assets/feeds.json');
  }

}
