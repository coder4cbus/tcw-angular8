import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})

export class QuoteService {
  ticker: string
  exchange: string
  price: string
  change: string
  socket: any


  constructor() { }

  getQuotes(): Observable<Quote> {
    const observable = Observable.create(
      (observer: Subscriber<Quote>) => {this.socket = io('ws://localhost:4200');
                                        this.socket.emit('getquotes', 'start');
                                        this.socket.on('newquote', (data: string) => {observer.next(JSON.parse(data));
      });
  });
    return observable;
  }
  disconnect() { this.socket.disconnect(); }

}
