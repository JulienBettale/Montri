import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  @Output() firstNumber: EventEmitter<number> = new EventEmitter<number>();
  @Output() secondNumber: EventEmitter<number> = new EventEmitter<number>();
  
  public sendValue(value: number): void {
    this.firstNumber.emit(value);
    this.secondNumber.emit(value);
  }

  constructor() {}

  ngOnInit(): void {}

  inputIsCorrect(form: NgForm) {
    if(form.value.firstNumber < form.value.secondNumber && 
      form.value.firstNumber >= 0 && 
      form.value.secondNumber >= 0) {
      return 'initial';
    } else {
      return 'none';
    }
  }

  inputIsNotCorrect(form: NgForm) {
    if(form.value.firstNumber > form.value.secondNumber) {
      return 'initial';
    } else {
      return 'none';
    }
  }

  errorNegativeValue(form: NgForm) {
    if (form.value.firstNumber < 0 || 
      form.value.secondNumber < 0) {
      return 'block';
    } else {
      return 'none';
    }
  }

  isValid(form: NgForm) {
    if(form.value.firstNumber > form.value.secondNumber || 
      form.value.firstNumber < 0 || 
      form.value.secondNumber < 0) {
        return 'invalid'
      } else {
        return 'valid'
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
