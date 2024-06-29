import { Component } from '@angular/core';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-second-subscriber',
  standalone: true,
  imports: [],
  templateUrl: './second-subscriber.component.html',
  styleUrl: './second-subscriber.component.scss'
})
export class SecondSubscriberComponent {
  text: string = '';
  constructor(private sharedService: SharedService) {
    this.sharedService.obterDados().subscribe((response) => {
      this.text = response;
    });
  }



}
