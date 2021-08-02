import { ControlPanelComponent } from './control-panel/control-panel.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LeaderboardComponent },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'control-panel', component: ControlPanelComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
