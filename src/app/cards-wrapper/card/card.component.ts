import { Component, Input, OnDestroy } from '@angular/core';
import { CardService } from './service/card.service';
import { Subscription } from 'rxjs';
import { flipInYAnimation, flipOutYAnimation } from 'angular-animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [flipInYAnimation(), flipOutYAnimation()]
})
export class CardComponent implements OnDestroy {

  @Input() cardName: number;
  @Input() cardNum: number;

  public opened = false;
  public checked = false;

  private subscription: Subscription;

  constructor(private cardService: CardService) {
    this.subscription = cardService.checkCards().subscribe(res => {
      if (res && (cardService.checkingCards.firstCard === this.cardName)) {
        this.checked = true;
        this.opened = false;
      } else {
        setTimeout(() => {
          this.opened = false;
        }, 500);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openCard() {
    if (!this.checked) {
      this.opened = true;
      this.cardService.addCard(this.cardName);
    }
  }

}
