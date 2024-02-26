import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  template: `
    <h1>Kredit Hesablama</h1>
    <div>
      <label>Kredit Tutarı:</label>
      <input [(ngModel)]="krediTutari">
    </div>
    <div>
      <label>Taksit Tutarı:</label>
      <select [(ngModel)]="taksitTutari" >
        <option>1</option>
        <option>6</option>
        <option>12</option>
      </select >
    </div>
    <div>
      <button (click)="hesabla()" >Hesabla</button>
    </div>
    <hr>
    <div>
      <h4>Aylıq Tutarı: {{ayliqTaksitTutari}} </h4>

    </div>

  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'KreditHesablamaAngular';
  krediTutari:number=10000;
  taksitTutari:number=1;
  ayliqTaksitTutari:number=0;
  hesabla(){
    this.ayliqTaksitTutari=
      this.krediTutari / this.taksitTutari
  }
}
