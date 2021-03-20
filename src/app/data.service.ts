import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public Users: string[] = [];
  public Messages: string[] = [];

  constructor() {
    this.Users = ["test", "grad", "dasd"]
    this.Messages = [];
  }






}
