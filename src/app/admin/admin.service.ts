import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}
  errorMessage: String = '';
  registerUser(from: any) {
    console.log('service');
    const headers = { 'Content-Type': 'application/json', Accept: '*/*' };
    // this.http
    //   .post('http://localhost:8081/user/registerUser', from, {
    //     headers: headers,
    //   })
    //   .subscribe({
    //     next: (data) => {
    //       //this.postId = data.id;
    //       console.log(data);
    //     },
    //     error: (error) => {
    //       this.errorMessage = error.message;
    //       console.error('There was an error!', error);
    //     },
    //   });

    this.http.post('http://localhost:8081/user/registerUser', from).subscribe({
      next: (data) => {
        //this.postId = data.id;
        console.log(data);
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
    console.log('end');
  }
}
