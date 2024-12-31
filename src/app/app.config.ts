import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ count: counterReducer }),
    provideStoreDevtools({
      maxAge: 25, // Retain last 25 states
      logOnly: !isDevMode(), // Ensures DevTools are enabled only in development mode.
    }),
  ],
};
