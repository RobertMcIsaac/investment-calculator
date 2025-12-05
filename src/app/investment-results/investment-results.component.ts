import { Component, input, Input } from '@angular/core';
import { type UserInput } from '../user-input/user-input.model';
import { InvestmentResultsService } from './investment-results.service';
import { InvestmentResults } from './investment-results.model';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // constructor(private investmentResultsService: InvestmentResultsService) {}

  // @Input({ required: true }) userInput!: UserInput;

  // results?: InvestmentResults[];

  // calculateResults(userInput: UserInput) {
  //   this.results =
  //     this.investmentResultsService.calculateInvestmentResults(userInput);
  // }

  @Input({ required: true }) investmentResults!: InvestmentResults[];
}
