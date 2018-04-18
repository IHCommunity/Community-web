import { MeetingsResumeComponent } from './components/community/meetings/meetings-resume/meetings-resume.component';
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
import { PaymentsComponent } from './components/my-home/payments/payments.component';
import { SinglePaymentComponent } from './components/my-home/payments/single-payment/single-payment.component';
import { ProposalsNewsComponent } from './components/community/proposals/proposals-news/proposals-news.component';
import { ProposalsFormComponent } from './components/community/proposals/proposals-form/proposals-form.component';

import { Routes } from '@angular/router';
import { MeetingItemComponent } from './components/community/meetings/meeting-item/meeting-item.component';
import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { depth: 0 } },
  { path: 'login', component: LoginComponent, data: { depth: 2 } },
  { path: 'signup', component: SignupComponent, data: { depth: 1 } },
  { path: '', component: MainComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 3 }, children: [
    { path: 'news', component: NewsComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 3 } },
    { path: 'home', component: MyHomeComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 3 } },
    { path: 'community', component: CommunityComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 3 } },
    { path: 'neighbors', component: ChatComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 3 } }
  ]},
  { path: 'news/:id', component: DetailComponent, data: { depth: 4 } },
  { path: 'home/profile/:id', component: ProfileComponent, data: { depth: 4 } },
  { path: 'home/profile/:id/edit', component: FormProfileComponent, data: { depth: 5 } },
  { path: 'home/payments', component: PaymentsComponent, data: { depth: 4 } },
  { path: 'home/payments/:id', component: SinglePaymentComponent, data: { depth: 5 } },
  { path: 'community/meetings', component: MeetingsComponent, data: { depth: 4 } },
  { path: 'community/meetings/voting', component: VotingComponent, data: { depth: 5 } },
  { path: 'community/meetings/voting/:id', component: AgreementComponent, data: { depth: 6 } },
  { path: 'community/meetings/new', component: MeetingFormComponent, data: { depth: 5 } },
  { path: 'community/meetings/resume', component: MeetingsResumeComponent, data: { depth: 5 } },
  { path: 'community/meetings/resume/:id', component: MeetingItemComponent, data: { depth: 6 } },
  { path: 'community/proposals/review', component: ProposalsNewsComponent, data: { depth: 4 } },
  { path: 'community/proposals/create', component: ProposalsFormComponent, data: { depth: 4 } },
  { path: 'community/rules', component: RulesListComponent, data: { depth: 4 } },
  { path: 'room/:id', component: ChatRoomComponent, data: { depth: 4 } }
];
