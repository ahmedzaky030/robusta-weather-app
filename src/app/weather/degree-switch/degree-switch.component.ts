import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DEGREE } from '../config/constants';

@Component({
  selector: 'app-degree-switch',
  templateUrl: './degree-switch.component.html',
  styleUrls: ['./degree-switch.component.scss']
})
export class DegreeSwitchComponent implements OnInit {
  @Input() currentDegree: string = DEGREE.celisius;
  @Output() OnChangeDegree: EventEmitter<string> = new EventEmitter();
  degrees = DEGREE;
  constructor() { }

  ngOnInit(): void {
  }

  selectDegree(degree: string){
    this.currentDegree = degree;
    this.OnChangeDegree.emit(degree);
  }

}
