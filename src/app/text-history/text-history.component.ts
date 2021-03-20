
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-text-history',
  templateUrl: './text-history.component.html',
  styleUrls: ['./text-history.component.sass']
})


export class TextHistoryComponent implements OnInit {

  constructor(public DataService: DataService) { }

  @Input() valueOfInput = "";
  ngOnInit(): void {

  }

}
