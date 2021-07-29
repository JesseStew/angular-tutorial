import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public selectedId: any
  public departments: { id: number; name: string; }[] = []

  constructor(private _departmentService: DepartmentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let idString = params.get('id')
      if (typeof idString === 'string') {
        this.selectedId = parseInt(idString)
      }
    })
    this._departmentService.getDepartments()
        .subscribe((data) => {
          this.departments = data
        })
  }

  onSelect(department: any){
    this.router.navigate(['/departments', department.id])
  }

  isSelected(department: { id: number; name: string; }) {
    return department.id === this.selectedId
  }

}
