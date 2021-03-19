import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextBoxComponent } from './text-box/text-box.component';
import { UserListComponent } from './user-list/user-list.component';
import { MatInputModule } from '@angular/material/input';
import { ChatwindowComponent } from './chatwindow/chatwindow.component';
import { TextHistoryComponent } from './text-history/text-history.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TextBoxComponent,
    UserListComponent,
    ChatwindowComponent,
    TextHistoryComponent,
    SearchbarComponent
  ],
  imports: [
    MatListModule,
    MatInputModule,
    MatIconModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
