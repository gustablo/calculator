import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  displayValue$ = new BehaviorSubject<number>(0);
  firstNumber: number;
  secondNumber: number;
  method: string;

  constructor() { }

  onPressNumberButton(value: number): void {

    this.displayValue = value;
  }

  set displayValue(value: number) {
    const oldValue = this.displayValue$.getValue();

    const concatedNewValue = String(oldValue).concat(String(value));

    const newValue = Number(concatedNewValue);

    this.displayValue$.next(newValue);
  }

  clearDisplay(): void {
    this.displayValue$.next(0);
  }

  calculate(): void {

    if (!this.secondNumber) {
      this.secondNumber = this.displayValue$.value;
    }

    if (this.firstNumber && this.secondNumber) {
      this.clearDisplay();
      this.displayValue = this.switchMethod();
      this.firstNumber = null;
      this.secondNumber = null;
    }
  }

  chooseMethod(label: string): void {

    this.method = label;

    if ((this.displayValue$.value && this.displayValue$.value !== 0) && !this.firstNumber) {
      this.firstNumber = this.displayValue$.value;
      this.clearDisplay();
      return;
    }

    if (!this.firstNumber) {
      this.firstNumber = this.displayValue$.value;
      this.clearDisplay();
    } else if (this.firstNumber && !this.secondNumber) {
      this.secondNumber = this.displayValue$.value;
      this.clearDisplay();
      this.calculate();
    }

  }

  switchMethod(): number {
    let value: number;

    switch (this.method) {
      case '+':
        value = this.firstNumber + this.secondNumber;
        break;
      case '-':
        value = this.firstNumber - this.secondNumber;
        break;
      case 'X':
        value = this.firstNumber * this.secondNumber;
        break;
      case '/':
        value = this.firstNumber / this.secondNumber;
        break;
    }

    return Number(value.toFixed(2));
  }

}
