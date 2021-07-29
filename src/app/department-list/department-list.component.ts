import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public departments: { id: number; name: string; }[] = []

  constructor(private _departmentService: DepartmentService) { }

  ngOnInit(): void {
    this._departmentService.getDepartments()
        .subscribe((data) => {
          this.departments = data
        })
  }

}
