import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmitterComponent } from '../emitter/emitter.component';
import { SubscriberComponent } from '../subscriber/subscriber.component';
import { SecondSubscriberComponent } from '../second-subscriber/second-subscriber.component';

@Component({
  selector: 'app-main-observer',
  standalone: true,
  imports: [RouterLink, EmitterComponent, SubscriberComponent,
    SecondSubscriberComponent
  ],
  templateUrl: './main-observer.component.html',
  styleUrl: './main-observer.component.scss'
})
export class MainObserverComponent {

}
