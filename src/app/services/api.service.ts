import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  static readonly API_URL: string = "https://nn6dh4ophd.execute-api.ca-central-1.amazonaws.com/test/";

  constructor(
    private httpClient: HttpClient
  ) { }

  getSolution(problemDescriptor: number[]): Observable<string> {
    return this.httpClient.post<string>(ApiService.API_URL, problemDescriptor);
  }
}
