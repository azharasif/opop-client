import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { CreateChannelComponent } from './create-channel/create-channel.component';
import { CreatingVideoComponent } from './creating-video/creating-video.component';
import { ChannelComponent } from './channel/channel.component';
import { ChannelSettingsComponent } from './channel-settings/channel-settings.component';
import { PreviousTrendsComponent } from './previous-trends/previous-trends.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DisplayTrendComponent } from './display-trend/display-trend.component';
import { VisitingOtherChannelComponent } from './visiting-other-channel/visiting-other-channel.component';
import { UserService } from "./user.service";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent,
    CreateChannelComponent,
    CreatingVideoComponent,
    ChannelComponent,
    ChannelSettingsComponent,
    PreviousTrendsComponent,
    UserProfileComponent,
  
    FeedbackComponent,
    DisplayTrendComponent,
    VisitingOtherChannelComponent,
    NavbarComponent,
    FooterComponent,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
