import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../../models/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule, // Necessário para o *ngIf e *ngFor
    MatDatepickerModule,  // Componente do datepicker
    FormsModule, // Necessário para o (ngModel)
    MatInputModule, MatFormFieldModule, // Para o forms (input)
    MatButtonModule, MatIconModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  providers: [provideNativeDateAdapter()],

})
export class UserComponent {
  @Input() name: string = "";
  @Output() event: EventEmitter<User> = new EventEmitter<User>();
  dataNasc: Date = new Date();
  idade?: number;
  user?: User;
  email: string = "";

  constructor() {

  }

  atualizarIdade() {
    let dataHoje = new Date();
    this.idade = dataHoje.getFullYear() - this.dataNasc.getFullYear();
  }

  enviar() {
    this.user = new User(this.name, this.dataNasc, this.email);
    //console.info(this.user);
    // Envia um evento
    Swal.fire({
      title: "Novo usuário",
      text: `Usuário ${this.user.name} cadastrado com sucesso!`,
      icon: 'success' 
    }).then((response) => {
      this.event.emit(this.user);
    });
    
  }

}
