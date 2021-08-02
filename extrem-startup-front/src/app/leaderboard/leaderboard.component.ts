import { LeaderboardService } from './leaderboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  players: any = [];
  autorefreshEnable: boolean = false;
  autorefreshInterval: any;

  constructor(private readonly leaderboard: LeaderboardService) {
    this.getLeaderboard();
  }

  ngOnInit(): void {
  }

  autoRefreshToggle(): void {
    this.autorefreshEnable = !this.autorefreshEnable;
    if (this.autorefreshEnable) {
      this.autorefreshInterval = setInterval(() => {
        this.getLeaderboard();
      }, 5000);
    } else {
      clearInterval(this.autorefreshInterval);
    }


  }

  private getLeaderboard() {
    this.leaderboard.get().subscribe((res) => {
      this.players = res;
    })
  }

}
