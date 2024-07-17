import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StartComponent } from './pages/start/start.component';
import { InstructionComponent } from './pages/instruction/instruction.component';
import { PlayComponent } from './pages/play/play.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'start', component: StartComponent }, 
  { path: 'instruction', component: InstructionComponent }, 
  { path: 'play/:gameCategory', component: PlayComponent},
  { path: '**', redirectTo: '' }
];
