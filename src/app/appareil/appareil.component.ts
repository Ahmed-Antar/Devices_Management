import { Component, Input,OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.services';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName : string;
  @Input() appareilStatus : string;
  @Input() indexOfAppareil : number;

  constructor(private appareilService : AppareilService) { }

  ngOnInit() {
  }

  getStatus(){
    return this.appareilStatus ;
  }

  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil)
  }

  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil)
  }

  getColor(){
    if (this.getStatus() === 'allumé'){
       return 'green';
    }else if (this.getStatus() === 'éteint'){
       return 'red';
    }
  }

}
