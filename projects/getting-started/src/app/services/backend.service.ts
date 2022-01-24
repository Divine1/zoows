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

  sendMessage(messageText:any){
    let url = "http://localhost:3000/sendMessage"
    return this.httpClient.post(url,{message : messageText})
  }
}
