import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatDatepickerModule, FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  providers: [provideNativeDateAdapter()],

})
export class UserComponent {
  dataNasc: Date = new Date();

  constructor() {

  }
  enviar() {
    //console.log(this.dataNasc.getFullYear());
  }

}
