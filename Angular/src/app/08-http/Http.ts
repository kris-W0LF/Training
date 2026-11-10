import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  standalone: true,
  templateUrl: './http.html'
})
export class HttpComponent implements OnInit {

  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>(
      'https://jsonplaceholder.typicode.com/users'
    ).subscribe(data => {
      this.users = data;
    });
  }
}