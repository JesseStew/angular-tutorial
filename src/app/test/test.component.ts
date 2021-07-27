import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Jesse"
  public successClass = "text-success"
  public hasError = true
  public isSpecial = true

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name
  }

}
