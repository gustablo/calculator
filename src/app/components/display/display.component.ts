import { Component, OnInit } from '@angular/core';
import { LogicService } from '../shared/logic.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  value: number;

  constructor(
    private logicService: LogicService
  ) { }

  ngOnInit(): void {
    this.hearDisplayValue();
  }

  hearDisplayValue(): void {
    this.logicService.displayValue$.subscribe(val => {
      this.value = val;
    });
  }

}
