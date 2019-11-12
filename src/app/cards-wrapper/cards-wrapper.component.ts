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
    let item = 1;

    // prime number search
    while (item <= 50) {
      if ((item % 2 === 0 && item !== 2) || (item === 1)) {
        item++;
      } else if (item === 2) {
        this.cards.push(item);
        item++;
      } else {
        const k = Math.round(Math.sqrt(item));
        let flag = false;

        for (let i = 2; i < k + 1; i++) {
          if (item % i === 0) {
            item++;
            flag = true;
          }
        }

        if (flag === false) {
          this.cards.push(item);
          item++;
        }
      }
    }

    // dubbing of each item
    this.cards.forEach( (card, i, cards) => {
      cards.push(card);
    });

    // Mix the array
    this.cards.sort(() => {
      return Math.random() - 0.5;
    });

  }

}
