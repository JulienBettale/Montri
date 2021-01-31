import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component'

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {

  @Input() firstNumber: number = 20;
  @Input() secondNumber: number = 20;
  receivedValue: number;

  public receiveValue(firstNumber: number): void {
    this.receivedValue = firstNumber;
  }

  type = 'PieChart';
  data = [
    [null, 1],
    [null, 2]
  ];
  options = {
    pieHole: 0.4,
    pieSliceTextStyle: {
      color: 'black',
    },
    legend: 'none',
    colors: ['#F47000', '#C7C7CC'],
    backgroundColor: 'none',
  };
  width = 250;
  height = 250;

  constructor(private formComponent: FormComponent) { 
    console.log('Grapphic -> firstNumber : ' + this.formComponent.firstNumber)
    console.log('Grapphic -> secondNumber : ' + this.formComponent.secondNumber)
  }

  ngOnInit(): void {
    this.data[0][1] = this.firstNumber;
    this.data[1][1] = this.secondNumber;
    this.data.reverse();
  }

  getNumber(firstNumber: number, secondNumber: number) {
    const numberObject = {
      firstNumber: null,
      secondNumber: null
    };
    numberObject.firstNumber = firstNumber;
    numberObject.secondNumber = secondNumber;

    console.log('Graphique ' + this.firstNumber + ' ' + this.secondNumber);
  }
}