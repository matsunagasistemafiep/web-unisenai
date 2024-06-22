import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmitterComponent } from './components/observer/emitter/emitter.component';
import { MainObserverComponent } from './components/observer/main-observer/main-observer.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'obs',
        component: MainObserverComponent
    }
];
