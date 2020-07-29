import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 

@Injectable({
    providedIn: 'root'

})

export class NewsService {
constructor(private httpClient:HttpClient) { }
    getNewsItems() : Observable<News[]> {
        return this.httpClient.get<News[]>
        ('/assets/news_data.json')
    }
}

export class News {
    title: string
    body: string
}