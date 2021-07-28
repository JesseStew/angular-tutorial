import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Codevolution"
  public date = new Date
  public message = "Welcome to Codevolution"
  public person = {
    "firstName": "John",
    "lastName": "Doe",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
