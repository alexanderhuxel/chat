import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  Messages = ["ddass", "daes", "dasd"];

  saveMesssage(msg: string) {
    this.Messages.push(msg);
  }

  constructor() { }
}
