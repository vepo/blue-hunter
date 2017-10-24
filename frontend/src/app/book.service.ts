import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map'

@Injectable()
export class BookService {

  constructor(private http: Http) { }

  search(term: string): Observable<any> {
    return this.http.get('https://dummy-blue-hunter.mybluemix.net/book/by-title/' + term)
      .map((response: Response) => response.json());
  }
}
