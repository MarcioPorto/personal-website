import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

  private projectsList = new BehaviorSubject<any>(
    [
      {
        'id': 1,
        'name': 'Virtual Self-Driving Car',
        'description': "Implementation of a simple virtual self-driving car using Udacity's self-driving car simulator. The model for the car is built using Keras, and it is trained on data that I generated by manually driving a virtual car using Udacity's simulator. It uses a Convolutional Neural Network that takes as its input the pixels from the simulator screen and decides what to do next based on its current state in the world.",
        'tags': [
          'Keras', 'Deep Learning'
        ]
      },
      {
        'id': 2,
        'name': 'BlindSight',
        'description': "Project for Intel Singapore Invent 50 Competition, where our team built glasses that use Intel's Real Sense Camera to help people who are visually impaired make sense of their environment. I implemented text reading and object recognition features in C++. We were chosen as finalists at the competition.",
        'tags': [
          'C++', 'Computer Vision'
        ]
      },
      {
        'id': 3,
        'name': 'S.O.P.H.I.E.',
        'description': 'S.O.P.H.I.E. is an underwater robot I built with 2 other Macalester students for our AI Robotics class. It has a Raspberry Pi as its "brain" and it can be controlled using an API built using Python. S.O.P.H.I.E. is now part of the Macalester robotics lab, where other students can do future work on improving it.',
        'tags': [
          'AI', 'Robotics', 'Python'
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
        'description': 'In this nanodegree, I built a neural network from scratch as well as more advanced models with convolutional, generative adversarial and recurrent neural networks using TensorFlow.',
        'tags': [
          'Udacity'
        ]
      },
      {
        'id': 2,
        'name': 'Machine Learning Engineer Nanodegree',
        'description': 'Currently working on this nanodegree. Stay tuned for updates.',
        'tags': [
          'Udacity'
        ]
      }
    ]
  );
  courses = this.coursesList.asObservable();

  constructor() { }

}