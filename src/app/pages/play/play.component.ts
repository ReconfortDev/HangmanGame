import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CategoryWord } from '../../models/gamemodel';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})
export class PlayComponent implements OnInit {
  gameCategory: string | null = '';
  keyboardChars: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  randomItem: CategoryWord | undefined;
  randomItemWord: string[] = [];
  hiddenIndices: boolean[] = [];
  isMenuOpen: boolean = false;
  keyStates: { char: string; color: string }[] = [];
  hasWon: boolean = false;
  hasLost: boolean = false;
  wrongGuessCount: number = 0;
  maxWrongGuesses: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {
    this.initializeKeyStates();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.gameCategory = params.get('gameCategory');
      if (this.gameCategory) {
        this.fetchRandomItem(this.gameCategory);
      }
    });
  }

  initializeKeyStates() {
    this.keyStates = this.keyboardChars.map((char) => ({
      char,
      color: 'bg-white',
    }));
  }

  fetchRandomItem(categoryName: string) {
    this.dataService.getRandomWord(categoryName).subscribe(
      (item) => {
        this.randomItem = item;
        if (this.randomItem) {
          this.randomItemWord = this.randomItem.name.split('');
          this.hiddenIndices = this.getHiddenIndices(this.randomItemWord.length);
          this.maxWrongGuesses = this.hiddenIndices.filter((hidden) => hidden).length;
        }
      },
      (error) => {
        console.error('Error while fetching random item:', error);
      }
    );
  }

  getHiddenIndices(length: number): boolean[] {
    const hiddenIndices = Array(length).fill(false);
    const numberOfHiddenChars = Math.floor(length * 0.4);

    for (let i = 0; i < numberOfHiddenChars; i++) {
      let index;
      do {
        index = Math.floor(Math.random() * length);
      } while (hiddenIndices[index]);

      hiddenIndices[index] = true;
    }

    return hiddenIndices;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  restart() {
    this.router.navigate(['/start']);
  }

  gotoHome() {
    this.router.navigate(['/']);
  }

  pressChar(char: string) {
    const hiddenChars = this.randomItemWord.filter((_, index) => this.hiddenIndices[index]);
    const isCorrectGuess = hiddenChars.includes(char);

    this.keyStates = this.keyStates.map((keyState) => {
      if (keyState.char === char) {
        keyState.color = isCorrectGuess ? 'bg-blue-500' : 'bg-white/20';
      }
      return keyState;
    });

    if (isCorrectGuess) {
      this.showHiddenChar(char);
    } else {
      this.wrongGuessCount++;
      this.checkLose();
    }
  }

  showHiddenChar(char: string) {
    this.hiddenIndices = this.hiddenIndices.map((hidden, index) => {
      return hidden && this.randomItemWord[index] === char ? false : hidden;
    });

    this.checkWin();
  }

  checkWin() {
    if (this.hiddenIndices.every((hidden) => !hidden)) {
      this.hasWon = true;
    }
  }

  checkLose() {
    if (this.wrongGuessCount >= this.maxWrongGuesses) {
      this.hasLost = true;
    }
  }

  getWidth(): string {
    const percentage = 100 - (this.wrongGuessCount / this.maxWrongGuesses) * 100;
    return `${percentage}%`;
  }
}
