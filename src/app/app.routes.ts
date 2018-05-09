import { ServicesItemComponent } from './components/community/services/services-item/services-item.component';
import { ServicesListComponent } from './components/community/services/services-list/services-list.component';
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
import { PaymentFormComponent } from './components/my-home/payments/payment-form/payment-form.component';
import { PositiveFeedbackComponent } from './components/my-home/payments/feedback/positive-feedback/positive-feedback.component';
import { AgreementFormComponent } from './components/community/meetings/agreement-form/agreement-form.component';

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
  { path: 'news/:id', component: DetailComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 4 } },
  { path: 'home/profile/:id', component: ProfileComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 4 } },
  { path: 'home/profile/:id/edit', component: FormProfileComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 5 } },
  { path: 'home/payments/new', component: PaymentFormComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 4 } },
  { path: 'home/payments', component: PaymentsComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 4 } },
  { path: 'home/payments/good',
    component: PositiveFeedbackComponent,
    canActivate: [IsAuthenticatedGuard], data: { depth: 4, feedback: 'good' } },
  { path: 'home/payments/wrong',
    component: PositiveFeedbackComponent,
    canActivate: [IsAuthenticatedGuard], data: { depth: 4, feedback: 'wrong' } },
  { path: 'home/payments/:id', component: SinglePaymentComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 5 } },
  { path: 'community/meetings', component: MeetingsComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 4 } },
  { path: 'community/meetings/voting', component: VotingComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 5 } },
  { path: 'community/meetings/voting/:id', component: AgreementComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 6 } },
  { path: 'community/meetings/new', component: MeetingFormComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 5 } },
  { path: 'community/meetings/new/:id/agreements',
    component: AgreementFormComponent,
    canActivate: [IsAuthenticatedGuard], data: { depth: 6 } },
  { path: 'community/meetings/resume', component: MeetingsResumeComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 5 } },
  { path: 'community/meetings/resume/:id', component: MeetingItemComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 6 } },
  { path: 'community/meetings/resume/:meeting/:id',
    component: AgreementComponent,
    canActivate: [IsAuthenticatedGuard], data: { depth: 7 } },
  { path: 'community/proposals/review', component: ProposalsNewsComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 4 } },
  { path: 'community/proposals/create', component: ProposalsFormComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 4 } },
  { path: 'community/rules', component: RulesListComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 4 } },
  { path: 'community/services', component: ServicesListComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 4 } },
  { path: 'community/services/:id', component: ServicesItemComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 5 } },
  { path: 'room/:id', component: ChatRoomComponent, canActivate: [IsAuthenticatedGuard], data: { depth: 4 } },
  { path: '**', component: HomeComponent, data: { depth: 0 } }
];
