import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-instruction',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './instruction.component.html',
})
export class InstructionComponent {
  instructions = [
    {
      number: '01',
      title: 'Choose a category',
      description: 'First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.'
    },
    {
      number: '02',
      title: 'Guess the letters',
      description: 'Next, start guessing letters. For each correct letter you guess, it will fill in the blanks of the secret word. If you guess incorrectly, you might get closer to losing the game!'
    },
    {
      number: '03',
      title: 'Complete the word',
      description: 'Keep guessing until you complete the word or run out of guesses. Try to complete the word as quickly and accurately as possible to win the game!'
    }
  ];

  constructor (private router: Router){}

  gotoHome(){
    this.router.navigate(['/home'])
  }
}
