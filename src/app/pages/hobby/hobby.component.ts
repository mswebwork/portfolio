import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from "@angular/material/card";

@Component({
  selector: 'app-hobby',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardImage
  ],
  templateUrl: './hobby.component.html',
  styleUrl: './hobby.component.scss'
})
export class HobbyComponent {

}
