import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = environment.url;

  constructor(private http: HttpClient) { }
  // Get Users - Read
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'api/users/getAllUsers');
  }

  //validate login creds
  validateLogindata(data: any): Observable<any[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // Add other headers if required
    });
    console.log('body: ',data);
    // const options= {
    //   headers,
    //   body: data
    // };
   // console.log("rewuest: ",options)
    return this.http.post<any>(this.url + 'api/users/validateLogin', data, {headers});
    //return this.http.get<any[]>(this.url + 'api/users/validateLogin');
  }

}
