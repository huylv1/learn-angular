import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './app-hero.component.html',
  styleUrls: ['./app-hero.component.scss']
})
export class AppHeroComponent implements OnInit, OnChanges {

  @Input() name: string;
  @Output() liked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    const hero = changes['name'];
    const oldValue = hero.previousValue;
    const newValue = hero.currentValue;
    

    if (!hero.isFirstChange()) {
      console.log(`Hero changed from ${oldValue} to ${newValue}`);
    }
  }

}
