import { Component } from '@angular/core';
import { AppService } from './app.service';
import type { UserInput } from './user-input/user-input.model';
import { InvestmentResults } from './investment-results/investment-results.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private appService: AppService) {}

  resultsData?: InvestmentResults[];

  onCalculate(data: UserInput) {
    this.resultsData = this.appService.calculateInvestmentResults(data);
  }
}
