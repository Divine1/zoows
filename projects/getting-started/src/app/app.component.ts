import { Component } from '@angular/core';
import { BackendService } from './services/backend.service';
import { PushnotificationService } from './services/pushnotification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gettingStarted';
  placeholderdata:any=[];

  constructor(private backendService : BackendService,
    private pushNotification : PushnotificationService
    ){
    this.backendService.getPlaceholderData().subscribe((data:any)=>{
      console.log("data ",data);
      this.placeholderdata =data;
    },(err:any)=>{
      console.log("err ",err);
    })

    
    
  }
  registerForPushNotification(){
    this.pushNotification.subscribeToPushNotification()
  }
  sendMessage(){
    let messageText = "demo message send";
    this.backendService.sendMessage(messageText).subscribe((resdata)=>{
      console.log("sendMessage resdata ",resdata)
    },(err)=>{
      console.log("sendMessage err ",err);
    })
  }
}
