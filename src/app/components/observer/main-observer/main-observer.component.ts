import { Component } from '@angular/core';
import { EmitterComponent } from '../emitter/emitter.component';
import { SubscriberComponent } from '../subscriber/subscriber.component';

@Component({
  selector: 'app-main-observer',
  standalone: true,
  imports: [EmitterComponent, SubscriberComponent],
  templateUrl: './main-observer.component.html',
  styleUrl: './main-observer.component.scss'
})
export class MainObserverComponent {

}
