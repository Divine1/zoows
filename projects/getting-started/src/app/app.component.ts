import { Component } from '@angular/core';
import { BackendService } from './services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gettingStarted';
  placeholderdata:any=[];

  constructor(private backendService : BackendService){
    this.backendService.getPlaceholderData().subscribe((data:any)=>{
      console.log("data ",data);
      this.placeholderdata =data;
    },(err:any)=>{
      console.log("err ",err);
    })
    
  }
}
