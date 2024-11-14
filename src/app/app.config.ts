import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ErrorHandlerService } from './services/error-handler.service.js';

export const appConfig: ApplicationConfig = {
  providers: [{provide: ErrorHandler, useClass: ErrorHandlerService}, provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch()), provideAnimationsAsync(), provideNativeDateAdapter(), provideAnimationsAsync(), provideAnimationsAsync()]
};
