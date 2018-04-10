import { CommunityComponent } from './components/community/community.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { DetailComponent } from './components/news/detail/detail.component';
import { MeetingFormComponent } from './components/community/meetings/meeting-form/meeting-form.component';
import { ChatComponent } from './components/chat/chat.component';

import { Routes } from '@angular/router';
import { MeetingsComponent } from './components/community/meetings/meetings.component';
import { MainComponent } from './components/misc/main/main.component';
import { RulesListComponent } from './components/community/rules/rules-list/rules-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { depth: 0 } },
  { path: 'login', component: LoginComponent, data: { depth: 1 } },
  { path: 'signup', component: SignupComponent, data: { depth: 2 } },
  { path: '', component: MainComponent, data: { depth: 3 }, children: [
    { path: 'news', component: NewsComponent, data: { depth: 4 } },
    { path: 'home', component: MyHomeComponent, data: { depth: 5 } },
    { path: 'community', component: CommunityComponent, data: { depth: 6 } },
    { path: 'neighbors', component: ChatComponent, data: { depth: 6 } }
  ]},
  { path: 'news/:id', component: DetailComponent, data: { depth: 7 } },
  { path: 'community/meetings', component: MeetingsComponent, data: { depth: 8 } },
  { path: 'community/meetings/new', component: MeetingFormComponent, data: { depth: 9 } },
  { path: 'community/rules', component: RulesListComponent, data: { depth: 10 } }
];
