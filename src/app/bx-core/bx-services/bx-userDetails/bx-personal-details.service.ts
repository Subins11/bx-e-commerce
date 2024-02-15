import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BxPersonalDetailsService {

private userDetailsAPI = "http://localhost:3000/userdetails";

constructor( private http: HttpClient ) { }

getDetails(): Observable<any[]> {
  return this.http.get<any[]>(this.userDetailsAPI);
}

updateDetails(userDetails: any): Observable<any> {
  return this.http.put<any>('http://localhost:3000/userdetails/' + userDetails.id, userDetails);
}
 
}
