import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatProgressBarModule, MatFormFieldModule, 
    MatIconModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  nome: any;
  
  submeter(): void {
    Swal.fire('Sucesso', 'Olá, boa noite ' + this.nome, 'success');
  }
}
