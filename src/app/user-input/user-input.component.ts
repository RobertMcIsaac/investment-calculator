import { Component, EventEmitter, Output } from '@angular/core';
import { type UserInput } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = '';
  annualInvestment = '';
  expectedReturn = '';
  duration = '';

  userInput?: UserInput;

  @Output() calculate = new EventEmitter<UserInput>();

  onSubmit() {
    this.userInput = {
      initialInvestment: Number(this.initialInvestment),
      annualInvestment: Number(this.annualInvestment),
      expectedReturn: Number(this.expectedReturn),
      duration: Number(this.duration),
    };
    this.calculate.emit(this.userInput);
  }
}
