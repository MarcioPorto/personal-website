import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  allProjects = [];

  constructor(private _data: DataService, private router: Router) { }

  ngOnInit() {
    this._data.projects.subscribe(res => this.allProjects = res);
  }

  navigateHome() {
    this.router.navigate(['']);
  }

}
