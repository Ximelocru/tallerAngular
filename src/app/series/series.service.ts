import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Series } from './series';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private url = environment.baseUrl;

  constructor(private http: HttpClient) { }
  getSeries(): Observable<Series[]> {
    return this.http.get<Series[]>(this.url);
  }

}
