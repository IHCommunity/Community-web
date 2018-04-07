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
import { NewsComponent } from './components/news/news.component';
import { NoticeComponent } from './components/news/notice/notice.component';
import { NavbarComponent } from './components/misc/navbar/navbar.component';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { DetailComponent } from './components/news/detail/detail.component';
import { BackComponent } from './components/misc/back/back.component';
import { CommunityComponent } from './components/community/community.component';

import { SearchPipe } from './shared/pipes/search.pipe';

import { NewsService } from './shared/services/news.service';
import { SessionService } from './shared/services/session.service';
import { UsersService } from './shared/services/users.service';
import { GlobalErrorHandlerService } from './shared/services/global-error-handler.service';

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
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    NewsService,
    SessionService,
    UsersService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
