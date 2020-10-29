import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, of } from 'rxjs';
import { filter, map, tap } from "rxjs/operators"
@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.scss']
})
export class KeyLoggerComponent implements OnInit {

  keys = '';

  @ViewChild('keyComponent', {static: true})  input: ElementRef;

  constructor() {
    // const values = from([1,2,3,4,5,6])
    // values.subscribe( val => console.log(val))


   }

  ngOnInit(): void {

    const logger = fromEvent(this.input.nativeElement, 'keyup')
    logger.pipe(
      map((evt: KeyboardEvent) => evt.key.charCodeAt(0)), 
      filter( code => {
        if (code !== NaN) {
          return !(code > 31 && (code < 48 || code > 57));
        }

        return true
      }),      
        tap(digit => this.keys += String.fromCharCode(digit)),      
    ).subscribe();
  }

}
