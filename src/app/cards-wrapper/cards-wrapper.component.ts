import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-wrapper',
  templateUrl: './cards-wrapper.component.html',
  styleUrls: ['./cards-wrapper.component.scss']
})
export class CardsWrapperComponent implements OnInit {

  public cards = [];

  constructor() { }

  ngOnInit() {

    // prime numbers search
    this.searchPrimeNums();

    // dubbing of each item
    this.dubbingItems();

    // Mix the array
    this.mixArr();

  }

  searchPrimeNums() {
    nextPrime:
    for (let i = 2; i <= 50; i++) {
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
      this.cards.push(i);
    }
  }

  dubbingItems() {
    this.cards.forEach( (card, i, cards) => {
      cards.push(card);
    });
  }

  mixArr() {
    this.cards.sort(() => {
      return Math.random() - 0.5;
    });
  }

}
