import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CategoryData, CategoryWord } from '../models/gamemodel';

@Injectable({
    providedIn: 'root'
  })

  
  export class DataService {
    dataUrl = '/data.json';
  
    constructor(private http: HttpClient) {}
  
    getCategoryData(): Observable<CategoryData[]> {
      return this.http.get<CategoryData[]>(this.dataUrl);
    }

    getRandomWord(categoryName: string): Observable<CategoryWord | undefined > {
        return this.getCategoryData().pipe(
            map((categories:any) => {
                // console.log('Categories:', categories.categories);
                return categories.categories[categoryName]
            }),
            map((items:any) => {
                // console.log('Items in category:', items);
                if (items && items.length > 0) {
                    const randomWordIndex = Math.floor(Math.random() * items.length);
                    return items[randomWordIndex];
                }
                return undefined;
            })
        )
    }

  }