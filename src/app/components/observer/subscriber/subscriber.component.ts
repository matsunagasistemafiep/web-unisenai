import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subscriber',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './subscriber.component.html',
  styleUrl: './subscriber.component.scss'
})
export class SubscriberComponent implements OnInit {
  
  dadosRecebidos: string;

  constructor(private service: SharedService) {
    this.dadosRecebidos = '';
  }

  /**
   * Método ao ser executado quando o componete é inicializado
   */
  ngOnInit(): void {
    // O dado é atualizado sempre que houver alguma mudança
    this.service.obterDados().subscribe(dados => {
      this.dadosRecebidos = dados;
    });
  }



}
