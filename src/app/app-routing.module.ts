import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixedNoteComponent } from './components/fixed-note/fixed-note.component';
import { NewNoteComponent } from './components/new-note/new-note.component';

const routes: Routes = [
  {
    path: "home",
    component: FixedNoteComponent
  },
  {
    path: "create-note",
    component: NewNoteComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
