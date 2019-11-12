import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  public isSame = new Subject();
  public checkingCards = {firstCard: null, secondCard: null};

  constructor() {
  }

  addCard(cardName: number) {
    if (!this.checkingCards.firstCard) {
      this.checkingCards.firstCard = cardName;
    } else {
      this.checkingCards.secondCard = cardName;
      this.checkCards();
    }
  }

  checkCards(): Observable<any> {
    if (this.checkingCards.firstCard === this.checkingCards.secondCard) {
      this.isSame.next(true);
    } else {
      this.isSame.next(false);
    }
    this.checkingCards = {firstCard: null, secondCard: null};
    return this.isSame;
  }

}
