import { ControlPanelService } from './../control-panel/control-panel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  round = 0
  isStarted: boolean = false;

  constructor(private readonly controlPanel: ControlPanelService) {
    this.status()
  }

  ngOnInit(): void {
  }

  start(): void {
    this.controlPanel.start().subscribe((res: boolean) => {
      this.status()
    });
  }

  nextRound(): void {
    console.log('NEXT ROUND')
    this.controlPanel.nextRound().subscribe((res: boolean) => {

    });
  }

  status(): void {
    this.controlPanel.status().subscribe((res: { running: boolean, round: number }) => {
      this.isStarted = res.running;
      this.round = res.round;
    });
  }

  stop(): void {
    this.controlPanel.stop().subscribe((res: boolean) => {
      this.status()
    });
  }

  reset(): void {
    this.controlPanel.reset().subscribe((res: boolean) => {
      this.status()
    });
  }

}
