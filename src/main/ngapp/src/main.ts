import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/modules/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

// TODO Form validation
// TODO Migrate from Template-driven Forms to Reactive Forms
// TODO Language service RUS-ENG
// TODO Migrate from bootstrap alpha to beta
// TODO Migrate from less to postCSS
// TODO Unit and e2e tests
// TODO Comments
