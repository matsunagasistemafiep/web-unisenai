import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule, // Necessário para o *ngIf e *ngFor
    MatDatepickerModule,  // Componente do datepicker
    FormsModule, // Necessário para o (ngModel)
    MatInputModule, MatFormFieldModule // Para o forms (input)
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  providers: [provideNativeDateAdapter()],

})
export class UserComponent {
  dataNasc: Date = new Date();
  idade?: number;

  constructor() {

  }

  enviar() {
    let dataHoje = new Date();
    this.idade = dataHoje.getFullYear() - this.dataNasc.getFullYear();
  }

}
