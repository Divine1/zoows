import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private  httpClient : HttpClient) { 

  }
  ngOnInit(){

  }
  getPlaceholderData(){
    let url = "https://jsonplaceholder.typicode.com/todos";
    return this.httpClient.get(url)
  }
}
