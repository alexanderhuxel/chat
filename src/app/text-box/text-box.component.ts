import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/models/models';


@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.sass']
})
export class TextBoxComponent implements OnInit {
  @Input() valueOfInput: string = "";
  chat!: Chat;
  constructor() { }


  ngOnInit(): void {
    this.newChat();
  }

  sendMessage() {
    this.chat.Messages.push(this.valueOfInput);
    console.log(this.chat);
    this.valueOfInput = "";

  }

  newChat() {
    this.chat = new Chat();
  }

}
