import { Component, OnInit, Input } from '@angular/core';
import { LogicService } from '../shared/logic.service';
import { IButtons } from 'src/app/interfaces/buttons.interface';

@Component({
  selector: 'app-number-buttons',
  templateUrl: './number-buttons.component.html',
  styleUrls: ['./number-buttons.component.css']
})
export class NumberButtonsComponent implements OnInit, IButtons {

  @Input() label: number;

  constructor(
    private logicService: LogicService
  ) { }

  ngOnInit(): void { }

  onClick(): void {
    this.logicService.onPressNumberButton(this.label);
  }

}
