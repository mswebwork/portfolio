import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatCardContent,
    MatCard,
    MatCardImage,
    MatCardActions,
    MatButton,
    RouterLink,
    MatButtonModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
