import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any>{
    return this.http.get<any>('http://localhost:5000/posts')
  }

  buy(id: any, body: any): Observable<any>{
    return this.http.post<any>('http://localhost:5000/posts/' + id, body)
  }
}
