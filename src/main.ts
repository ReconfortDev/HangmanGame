import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes)
  ]
}).catch(err => console.error(err));
