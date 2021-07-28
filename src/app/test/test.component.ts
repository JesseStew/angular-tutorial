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
  public highlightColor = "orange"
  public displayName = false
  public expression = false

  public titleStyles = {
    fontStyle: "italic",
    color: "blue",
  }
  public greeting = ""

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name
  }

  onClick(event: any){
    console.log("Welcome")
    console.log(event)
    this.greeting = event.type
  }

  logMessage(value: any) {
    console.log(value)
  }

}
