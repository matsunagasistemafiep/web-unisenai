import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import Swal from 'sweetalert2'
import { UserComponent } from '../user/user.component';
import { User } from '../../models/user.model';
import { CommonModule, DatePipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule, MatFormFieldModule, 
    MatIconModule, MatInputModule, MatButtonModule, FormsModule, UserComponent,
  MatDividerModule, MatCardModule, DatePipe, MatSidenavModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  nome: any;
  listaUsuarios: User[] = [];

  constructor(private router: Router) {

  }
  
  submeter(): void {
    Swal.fire('Sucesso', 'Olá, boa noite ' + this.nome, 'success');
  }

  atualizarLista(user: User) {
    this.listaUsuarios.push(user);
    console.info(this.listaUsuarios);
  }

  navegarParaPagina() {
    this.router.navigate(['observer']);
  }
}
