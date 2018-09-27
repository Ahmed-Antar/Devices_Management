import { Component, OnInit } from '@angular/core';
import { reject } from 'q';
import { AppareilService } from './services/appareil.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-projet-angular';
  isAuth = false ;
  appareils : any[];

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  )

  constructor( private appareilService : AppareilService ){
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit(){
   this.appareils = this.appareilService.appareils;
  }

  onAllumer(){
    this.appareilService.switchOnAll();
  
  }

  onEteindre(){
    this.appareilService.switchOffAll();
  
  }
}
