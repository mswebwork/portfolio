import { Component } from '@angular/core';
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatSlideToggle,
    MatCardContent,
    MatCard,
    MatToolbar,
    MatIcon,
    MatIconButton,
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
