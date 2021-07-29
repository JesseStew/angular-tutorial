import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // let idString = this.route.snapshot.paramMap.get('id')
    // let id: number
    // if (typeof idString === 'string') {
    //   this.departmentId = parseInt(idString)
    // } 
    this.route.paramMap.subscribe((params: ParamMap) => {
      let idString = this.route.snapshot.paramMap.get('id')
      if (typeof idString === 'string') {
        this.departmentId = parseInt(idString)
      } 
    })
  }

  goPrevious(){
    let previousId = this.departmentId - 1
    this.router.navigate(['/departments', previousId])
  }

  goNext(){
    let nextId = this.departmentId + 1
    this.router.navigate(['/departments', nextId])
  }

  gotoDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null
    this.router.navigate(['/departments', {
      id: selectedId,
      test: 'testvalue'
    }])
  }

}
