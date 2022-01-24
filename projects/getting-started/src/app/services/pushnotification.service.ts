import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PushnotificationService {

  readonly VAPID_PUBLIC_KEY = "BJPlP7T2NJLHqGsk9PuxqSqT08io3R0MWWRwX8HleyW7uwue9tNltwrCuCfZbAboT6Xqv_laPSm22_YYz2FGGAA"
  constructor(
    private swPush : SwPush,
    private httpClient : HttpClient
  ) { 



  }


  ngOnInit(){

    if(this.swPush.isEnabled){
      
      this.swPush.messages.subscribe((pushResData)=>{
        console.log("pushResData data ",pushResData);
      },(err)=>{
        console.log("pushResData err ",err);
      })
    }
  }


  subscribeToPushNotification(){
    console.log("in subscribeToPushNotification")
    if(this.swPush.isEnabled){
      console.log("service worker is supported by browser")
      this.swPush.requestSubscription({
        serverPublicKey : this.VAPID_PUBLIC_KEY
      }).then((subscriptionObj)=>{
        console.log("subscriptionObj ",subscriptionObj);
        let url = "http://localhost:3000/registerPushnotification"
        this.httpClient.post(url,subscriptionObj).subscribe((registrationResponseData)=>{
          console.log("registrationResponseData ",registrationResponseData)
        },(err)=>{
          console.log("registrationResponseData err ",err );
        })
      }).catch((err)=>{
        console.log("could not subscribe to notifications err ",err);
      })
    }
    else{
      console.log("service worker is not supported by browser")
    }
  }
}
