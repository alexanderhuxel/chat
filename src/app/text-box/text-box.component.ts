import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/models/models';


@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.sass']
})
export class TextBoxComponent implements OnInit {
  message: string = "";
  chat!: Chat;

  constructor() { }


  ngOnInit(): void {
    this.newChat();
    console.log(this.chat)
  }

  sendMessage() {
    this.chat.Messages.push(this.message);
    this.message = "";
    console.log(this.chat)

  }

  newChat() {
    this.chat = new Chat();
  }

}
