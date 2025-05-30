import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
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
  


}