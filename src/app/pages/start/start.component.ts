import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CategoryData } from '../../models/gamemodel';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})

export class StartComponent {
  categoryData: CategoryData | null = null;
  categoryNames: string[] = [];

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCategoryData().subscribe(
      (res: any) => {
        this.categoryData = res;
        if (this.categoryData) {
          this.categoryNames = Object.keys(this.categoryData.categories);
          console.log(this.categoryNames);
        }
        // console.log("Name:", this.categoryNames)
      },
      (error) => {
        console.error('Error fetching category data: ', error);
      }
    );
  }

  gotoHome() {
    this.router.navigate(['/']);
  }

  startGame(gameCategory: string){
    this.router.navigate([`/play/${gameCategory}`]);
  }
}

