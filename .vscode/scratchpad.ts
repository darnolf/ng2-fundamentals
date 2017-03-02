// import { Routes } from '@angular/router'
// import { CreateEventComponent } from '../app/events/create-event.component';

// export const appRoutes:Routes = [
//     { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
// ]


// @NgModule({
//  providers: [
//         EventService,
//         ToastrService, 
//         EventRouteActivator,
//         {
//             provide: 'canDeactivateCreateEvent',
//             useValue: checkDirtyState
//         }
//     ]
// })

// function checkDirtyState() {
//     return true
// }  





[formGroup]="profileForm"    
formControlName="firstName" 
formControlName="lastName"   

//module.ts
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//app.component.ts
import { Component, OnInit } from '@angular/core'

export class appComponent implements OnInit {

  ngOnInit() {
    let firstName = new FormControl()
    let lastName = new FormControl()
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }



<button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>

import { Router } from '@angular/router';

constructor(private router:Router){}

cancel() {
this.router.navigate(['events'])
}

(ngSubmit)="saveProfile(profileForm.value)"


[ngClass]="{'error': profileForm.controls.firstName.invalid && profileForm.controls.firstName.touched}"

pattern=".*\/.*.(png|jpg)"

<img [src]="newEventForm.controls.imageUrl.value" *ngIf="newEventForm.controlls.imageUrl?.valid"/>