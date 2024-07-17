import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StartComponent } from './pages/start/start.component';
import { InstructionComponent } from './pages/instruction/instruction.component';
import { PlayComponent } from './pages/play/play.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'start', component: StartComponent }, 
  { path: 'instruction', component: InstructionComponent }, 
  { path: 'play/:gameCategory', component: PlayComponent }, 
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
