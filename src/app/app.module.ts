import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs.operators';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/misc/main/main.component';
import { NewsComponent } from './components/news/news.component';
import { NoticeComponent } from './components/news/notice/notice.component';
import { NavbarComponent } from './components/misc/navbar/navbar.component';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { DetailComponent } from './components/news/detail/detail.component';
import { BackComponent } from './components/misc/back/back.component';
import { CommunityComponent } from './components/community/community.component';
import { MeetingsComponent } from './components/community/meetings/meetings.component';
import { MeetingFormComponent } from './components/community/meetings/meeting-form/meeting-form.component';
import { RulesListComponent } from './components/community/rules/rules-list/rules-list.component';
import { FormProfileComponent } from './components/my-home/form-profile/form-profile.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatRoomComponent } from './components/chat/chat-room/chat-room.component';
import { ProfileComponent } from './components/my-home/profile/profile.component';
import { VotingComponent } from './components/community/meetings/voting/voting.component';

import { SearchPipe } from './shared/pipes/search.pipe';
import { OrderPipe } from './shared/pipes/order.pipe';

import { NewsService } from './shared/services/news.service';
import { SessionService } from './shared/services/session.service';
import { UsersService } from './shared/services/users.service';
import { GlobalErrorHandlerService } from './shared/services/global-error-handler.service';
import { MeetingsService } from './shared/services/meetings.service';
import { RulesService } from './shared/services/rules.service';
import { ChatService } from './shared/services/chat.service';
import { AgreementsService } from './shared/services/agreements.service';
import { PaymentsService } from './shared/services/payments.service';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AgreementComponent } from './components/community/meetings/agreement/agreement.component';
import { ProposalsNewsComponent } from './components/community/proposals/proposals-news/proposals-news.component';
import { PaymentsComponent } from './components/my-home/payments/payments.component';
import { ProposalsFormComponent } from './components/community/proposals/proposals-form/proposals-form.component';
import { SinglePaymentComponent } from './components/my-home/payments/single-payment/single-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    NewsComponent,
    NoticeComponent,
    NavbarComponent,
    SearchPipe,
    MyHomeComponent,
    DetailComponent,
    BackComponent,
    CommunityComponent,
    MeetingFormComponent,
    MeetingsComponent,
    MainComponent,
    RulesListComponent,
    OrderPipe,
    ChatComponent,
    ChatRoomComponent,
    FormProfileComponent,
    ProfileComponent,
    VotingComponent,
    AgreementComponent,
    ProposalsNewsComponent,
    PaymentsComponent,
    ProposalsFormComponent,
    SinglePaymentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    NewsService,
    SessionService,
    UsersService,
    MeetingsService,
    AgreementsService,
    RulesService,
    ChatService,
    PaymentsService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
