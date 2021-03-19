import { Component, OnInit } from '@angular/core';
import { Chat, Messages } from 'src/models/models';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-text-history',
  templateUrl: './text-history.component.html',
  styleUrls: ['./text-history.component.sass']
})


export class TextHistoryComponent implements OnInit {

  constructor(public messages: MessagesService) {
    this.messages.saveMesssage("Heloo from TextHistoryComponent");
    console.log(this.messages.Messages);
  }
  //Messages = ["ddass", "daes", "dasd"]; 
  chat!: Chat;
  ngOnInit(): void {
    console.log(Messages);
  }

}
