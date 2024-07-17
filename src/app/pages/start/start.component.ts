import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-start',
  standalone: true,
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {
  constructor (private router: Router){}

  gotoHome(){
    this.router.navigate(['/'])
  }

}
