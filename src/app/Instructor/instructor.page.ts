import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'instructor.page.html',
  styleUrls: ['instructor.page.scss'],
})
export class InstructorPage {

  constructor(public firestore: DataService) {}

}


