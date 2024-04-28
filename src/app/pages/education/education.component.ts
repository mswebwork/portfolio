import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from "@angular/material/card";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardImage
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

}
