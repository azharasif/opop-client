import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { ChannelComponent } from './channel/channel.component';
import { ChannelSettingsComponent } from './channel-settings/channel-settings.component';
import { CreateChannelComponent } from './create-channel/create-channel.component';
import { CreatingVideoComponent } from './creating-video/creating-video.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PreviousTrendsComponent } from './previous-trends/previous-trends.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VisitingOtherChannelComponent } from './visiting-other-channel/visiting-other-channel.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'feed',
    component:FeedComponent,
    canActivate:[AuthGuard]
  },
  
  {
    path:'channel',
    component:ChannelComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'channel/settings',
    component:ChannelSettingsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'channel/add',
    component:CreateChannelComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'video/add',
    component:CreatingVideoComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'feedback',
    component:FeedbackComponent,
    canActivate:[AuthGuard]
   },
  {
    path:'trends',
    component:PreviousTrendsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'user/profile',
    component:UserProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'channel/info',
    component:VisitingOtherChannelComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
