import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName : string;
  @Input() appareilStatus : string;

  constructor() { }

  ngOnInit() {
  }

  getStatus(){
    return this.appareilStatus ;
  }
  onAllumer(){
    
  }

  getColor(){
    if (this.getStatus() === 'allumé'){
       return 'green';
    }else if (this.getStatus() === 'éteint'){
       return 'red';
    }
  }

}
