import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {

  allProjects: any;
  projectId: number;
  project: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    this.route.params.subscribe(res => this.projectId = res.id);
  }

  ngOnInit() {
    this._data.projects.subscribe(res => this.allProjects = res);
    // Retrieve appropriate project
    for (let project of this.allProjects) {
      if (project.id == this.projectId) {
        this.project = project;
      }
    }
  }

  navigateHome() {
    this.router.navigate(['']);
  }

}
