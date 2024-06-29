import { Component } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-emitter',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.scss'
})
export class EmitterComponent {
  dados: string = '';

  constructor(private service: SharedService) {

  }

  enviar() {
    this.service.enviarDados(this.dados);
  }
}
