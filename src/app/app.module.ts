import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixedNoteComponent } from './components/fixed-note/fixed-note.component';
import { FixedTabComponent } from './components/fixed-tab/fixed-tab.component';
import { SearchComponent } from './components/search/search.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { NoteHeaderComponent } from './components/note-header/note-header.component';
import { NoteTextComponent } from './components/note-text/note-text.component';

@NgModule({
  declarations: [
    AppComponent,
    FixedNoteComponent,
    FixedTabComponent,
    SearchComponent,
    NewNoteComponent,
    NoteHeaderComponent,
    NoteTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
