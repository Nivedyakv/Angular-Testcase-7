import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public firstName = 'Nivedya';
  public lastName ='kv';
  public title = 'This is the example for property binding';
  public value='        Write your name here';
  public email: string = ''; 
  public reason: string = ''; 
  public formSubmitted: boolean = false; 
<<<<<<< HEAD
 
=======
  public value='        Write your name here';
>>>>>>> 4f7a25a0f4350444b01e8ccaa050da586a76d5ee
  constructor() { }
  ngOnInit(): void {
  }
  submitForm(): void {
    console.log('Form submitted!');
    console.log('Email Address:', this.email);
    console.log('Reason for Contact:', this.reason);
    this.formSubmitted = true; 
  }
}
