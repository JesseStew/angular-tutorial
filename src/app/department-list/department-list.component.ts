import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public departments: { id: number; name: string; }[] = []

  constructor(private _departmentService: DepartmentService, private router: Router) { }

  ngOnInit(): void {
    this._departmentService.getDepartments()
        .subscribe((data) => {
          this.departments = data
        })
  }

  onSelect(department: any){
    this.router.navigate(['/departments', department.id])
  }

}
