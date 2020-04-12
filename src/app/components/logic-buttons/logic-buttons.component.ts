import { Component, OnInit, Input } from '@angular/core';
import { IButtons } from 'src/app/interfaces/buttons.interface';
import { LogicService } from '../shared/logic.service';

@Component({
  selector: 'app-logic-buttons',
  templateUrl: './logic-buttons.component.html',
  styleUrls: ['./logic-buttons.component.css']
})
export class LogicButtonsComponent implements OnInit, IButtons {

  @Input() label: string;

  constructor(
    private logicService: LogicService
  ) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.logicService.chooseMethod(this.label);
  }

}
