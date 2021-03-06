import { Routes } from "@angular/router";

import { DishDetailComponent } from '../dish-detail/dish-detail.component';
import { HomeComponent } from '../home/home.component';
import { MenuComponent } from '../menu/menu.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'aboutus', component: AboutComponent},
  { path: 'dishdetail/:id', component: DishDetailComponent },
  { path: 'contactus', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]