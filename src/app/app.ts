import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Highlight } from './highlight';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule,Highlight],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'MyApp';
  public desccription = 'This is a sample Angular application.';
  fullName = "Praveen D";

  getName(){
    return "TP";
  }

  imgUrl = "https://picsum.photos/1200/500";
  imgAlt = "Demo Image";

  isDisabled = false;

  clickMe(){
    alert("You clicked!");
    window.location.reload();
  }
  // Counter App
  value =1;

  increment(){
    this.value++;
  }
  reset(){
    this.value = 0;
  }
  decrement(){
    this.value--;
    if(this.value < 0){
      this.value = 0;
    }
  }
  // ngFor
  movies =[
    { name: 'Inception', year: 2010, rating: 8.8 },
    { name: 'The Dark Knight', year: 2008, rating: 9.0 },
    { name: 'Interstellar', year: 2014, rating: 8.6 },
    { name: 'The Matrix', year: 1999, rating: 8.7 },
    { name: 'Pulp Fiction', year: 1994, rating: 8.9 }
  ]
  numbers =[1,2,3,4,5,6,7,8,9,10];

  // ngIf
  showDetails = false;
  isRed=false;
  isBig = false;
  
today_date = new Date();
price = 1000;

}