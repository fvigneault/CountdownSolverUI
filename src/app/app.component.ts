import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  operand1: number;
  operand2: number;
  operand3: number;
  operand4: number;
  operand5: number;
  operand6: number;
  result: number;
  solution: string;

  constructor(
    private apiService: ApiService
  ) { }

  findSolution() {
    this.apiService.getSolution(this.buildProblemDescription()).subscribe((solution) => this.solution = solution);
  }

  buildProblemDescription() {
    return [
      this.operand1,
      this.operand2,
      this.operand3,
      this.operand4,
      this.operand5,
      this.operand6,
      this.result
    ];
  }
}
