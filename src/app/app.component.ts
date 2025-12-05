import { Component, Input } from '@angular/core';
import { type UserInput } from './user-input/user-input.model';
import { AppService } from './app.service';
import { InvestmentResults } from './investment-results/investment-results.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private appService: AppService) {}

  // @Input()
  // userInput?: UserInput;

  investmentResults?: InvestmentResults[];

  onCalculate(userInput: UserInput) {
    // this.userInput = userInput;
    this.investmentResults =
      this.appService.calculateInvestmentResults(userInput);
  }
}
