import { CommunityComponent } from './components/community/community.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { DetailComponent } from './components/news/detail/detail.component';
import { MeetingFormComponent } from './components/community/meeting-form/meeting-form.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, data: { depth: 1 } },
  { path: 'signup', component: SignupComponent, data: { depth: 2 } },
  { path: 'news', component: NewsComponent, data: { depth: 3 } },
  { path: 'news/:id', component: DetailComponent, data: { depth: 4 } },
  { path: 'home', component: MyHomeComponent, data: { depth: 5 } },
  { path: 'community', component: CommunityComponent, data: { depth: 6 } },
  { path: 'community/meetings/new', component: MeetingFormComponent, data: { depth: 7 } }
];
