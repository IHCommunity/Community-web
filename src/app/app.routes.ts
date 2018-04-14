import { CommunityComponent } from './components/community/community.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { DetailComponent } from './components/news/detail/detail.component';
import { MeetingFormComponent } from './components/community/meetings/meeting-form/meeting-form.component';
import { ChatComponent } from './components/chat/chat.component';
import { MeetingsComponent } from './components/community/meetings/meetings.component';
import { MainComponent } from './components/misc/main/main.component';
import { RulesListComponent } from './components/community/rules/rules-list/rules-list.component';
import { ChatRoomComponent } from './components/chat/chat-room/chat-room.component';
import { FormProfileComponent } from './components/my-home/form-profile/form-profile.component';
import { ProfileComponent } from './components/my-home/profile/profile.component';
import { VotingComponent } from './components/community/meetings/voting/voting.component';
import { AgreementComponent } from './components/community/meetings/agreement/agreement.component';

import { Routes } from '@angular/router';
import { ProposalsNewsComponent } from './components/community/proposals/proposals-news/proposals-news.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { depth: 0 } },
  { path: 'login', component: LoginComponent, data: { depth: 1 } },
  { path: 'signup', component: SignupComponent, data: { depth: 2 } },
  { path: '', component: MainComponent, data: { depth: 3 }, children: [
    { path: 'news', component: NewsComponent, data: { depth: 4 } },
    { path: 'home', component: MyHomeComponent, data: { depth: 5 } },
    { path: 'community', component: CommunityComponent, data: { depth: 6 } },
    { path: 'neighbors', component: ChatComponent, data: { depth: 7 } }
  ]},
  { path: 'news/:id', component: DetailComponent, data: { depth: 8 } },
  { path: 'home/profile/:id', component: ProfileComponent, data: { depth: 8 } },
  { path: 'home/profile/:id/edit', component: FormProfileComponent, data: { depth: 8 } },
  { path: 'community/meetings', component: MeetingsComponent, data: { depth: 9 } },
  { path: 'community/meetings/voting', component: VotingComponent, data: { depth: 9 } },
  { path: 'community/meetings/voting/:id', component: AgreementComponent, data: { depth: 9 } },
  { path: 'community/meetings/new', component: MeetingFormComponent, data: { depth: 10 } },
  { path: 'community/proposals/review', component: ProposalsNewsComponent, data: { depth: 11 } },
  { path: 'community/rules', component: RulesListComponent, data: { depth: 11 } },
  { path: 'room/:id', component: ChatRoomComponent, data: { depth: 12 } }
];
