import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

  private projectsList = new BehaviorSubject<any>(
    [
      {
        'id': 1,
        'name': 'Project 1',
        'description': 'Learn more about this project',
        'tags': [
          'tag 1', 'tag 2'
        ]
      },
      {
        'id': 2,
        'name': 'Project 2',
        'description': 'This is another example description over here.',
        'tags': [
          'tag 1', 'tag 2'
        ]
      }
    ]
  );
  projects = this.projectsList.asObservable();

  private coursesList = new BehaviorSubject<any>(
    [
      {
        'id': 1,
        'name': 'Deep Learning Foundations Nanodegree',
        'description': '',
        'tags': [
          'Udacity'
        ]
      },
      {
        'id': 2,
        'name': 'Machine Learning Engineer Nanodegree',
        'description': '',
        'tags': [
          'Udacity'
        ]
      }
    ]
  );
  courses = this.coursesList.asObservable();

  constructor() { }

}
