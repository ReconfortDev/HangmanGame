import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor (private router: Router){}

  start(){
    this.router.navigate(['/start'])
  }

  gotToInstruction(){
    this.router.navigate(['/instruction'])
  }
}
