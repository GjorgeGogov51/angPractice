import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
//import { AppComponent } from './app/app.component';
import { DemoComponent } from './hello/hello.component';

bootstrapApplication(DemoComponent, appConfig)
  .catch((err) => console.error(err));
