import { AddPlayerModel } from './add-player.model';
import { AddPlayerService } from './add-player.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss'],
  animations: [
    trigger('toggle', [
      state('true', style({ opacity: 1 })),
      state('void', style({ opacity: 0 })),
      transition(':enter', animate('200ms ease-in-out')),
      transition(':leave', animate('200ms ease-in-out'))
    ])
  ]
})
export class AddPlayerComponent implements OnInit {

  show: boolean = false;
  newplayerForm: FormGroup;
  addPlayer: AddPlayerModel = {} as AddPlayerModel;
  addPlayerSuccess: boolean = false;

  constructor(
    private readonly addPlayerService: AddPlayerService,
    private readonly fb: FormBuilder
  ) {
    this.newplayerForm = this.fb.group({
      name: new FormControl('', Validators.required),
      host: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('ss')
    const addPlayer = Object.assign(this.addPlayer, this.newplayerForm.value)
    this.addPlayerService.addPlayer(addPlayer).subscribe(
      (res: boolean) => {
        this.addPlayerSuccess = true;
        this.show = true;
        setTimeout(() => { this.show = false }, 3000)
        this.newplayerForm.reset()
      },
      (err) => {
        this.show = true;
        setTimeout(() => { this.show = false }, 3000)
        this.newplayerForm.reset()
      })

  }

}
