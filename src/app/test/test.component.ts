import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Jesse"
  public myId = "testId"
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name
  }

}
