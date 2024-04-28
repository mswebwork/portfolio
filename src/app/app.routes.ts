import { Routes } from '@angular/router';
import {AboutMeComponent} from "./pages/about-me/about-me.component";
import {CareerComponent} from "./pages/career/career.component";
import {EducationComponent} from "./pages/education/education.component";
import {HobbyComponent} from "./pages/hobby/hobby.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: "", redirectTo: "about-me" , pathMatch: "full" },
  { path: "about-me" , component: AboutMeComponent },
  { path: "career", component: CareerComponent },
  { path: "education", component: EducationComponent },
  { path: "hobby", component: HobbyComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "**" , component: PageNotFoundComponent }
];
