import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.sass']
})
export class TextBoxComponent implements OnInit {
  @Input() valueOfInput: string = "";
  //chat!: DataService;
  constructor(public data: DataService) { }


  ngOnInit(): void {
    // this.newChat();
  }

  sendMessage() {
    this.data.Messages.push(this.valueOfInput);
    console.log(this.data);
    this.valueOfInput = "";

  }

  // newChat() {
  //   this.chat = new DataService();
  // }

}
