import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  allProjects = [];
  visibleProjects = [];

  allCourses = [];
  visibleCourses = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.projects.subscribe(res => this.allProjects = res);
    for (let project of this.allProjects) {
      if (project.displayOnHome) {
        this.visibleProjects.push(project);
      }
    }

    this._data.courses.subscribe(res => this.allCourses = res);
    this.visibleCourses = this.allCourses;
  }

  filterProjects() {
    
  }

}
