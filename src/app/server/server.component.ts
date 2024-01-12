import {Component} from '@angular/core';

@Component({
  selector:'app-server',
  templateUrl:'./server.component.html',
  styles:[`
    .online{
      color: white;
    }
  `, `
    .offline{
    color: yellow;
  }
  `]
})
export class ServerComponent{
serverId:number =10;
serverStatus: string = 'offline';

constructor() {

  this.serverId = Math.round( Math.random() * 100 );
  this.serverStatus =  this.serverId  > 20 ? 'online' :'offline';
}
getServerStatus(){
  return this.serverStatus;
}
  getbackColor(){
   return this.serverStatus == 'online' ? 'green' : 'red';
  }

  getColor(){
    return this.serverStatus == 'online' ? 'white' : 'yellow';
  }
}
