import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-note-widget',
  templateUrl: './note-widget.component.html',
  styleUrls: ['./note-widget.component.css']
})
export class NoteWidgetComponent {
  @Input()  note = {
    title: "Placeholder",
    content: "aaaayujghfjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjaaaaaaaaaa"
  }
}
