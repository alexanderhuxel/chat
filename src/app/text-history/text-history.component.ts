import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/models/models';

@Component({
  selector: 'app-text-history',
  templateUrl: './text-history.component.html',
  styleUrls: ['./text-history.component.sass']
})


export class TextHistoryComponent implements OnInit {
  Messages = ["ddass", "daes", "dasd"];
  chat!: Chat;
  ngOnInit(): void {
  }

}
