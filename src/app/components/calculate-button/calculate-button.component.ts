import { Component, OnInit } from '@angular/core';
import { IButtons } from 'src/app/interfaces/buttons.interface';
import { LogicService } from '../shared/logic.service';

@Component({
  selector: 'app-calculate-button',
  templateUrl: './calculate-button.component.html',
  styleUrls: ['./calculate-button.component.css']
})
export class CalculateButtonComponent implements OnInit, IButtons{

  constructor(
    private logicService: LogicService
  ) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.logicService.calculate();
  }

}
