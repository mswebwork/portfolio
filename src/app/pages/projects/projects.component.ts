import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatCardContent,
    MatCard,
    MatCardImage,
    MatCardActions,
    MatButton
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
