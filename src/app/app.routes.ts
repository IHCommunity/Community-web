import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { DetailComponent } from './components/news/detail/detail.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: DetailComponent },
  { path: 'home', component: MyHomeComponent }
];
