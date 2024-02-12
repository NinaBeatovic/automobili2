import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"automobili-c9570","appId":"1:240360166966:web:3d5201eaeb7ef801c1ea97","storageBucket":"automobili-c9570.appspot.com","apiKey":"AIzaSyBMkdlmOLyi1cQ7aYEJ1IQ-PY7T-Ld7nBk","authDomain":"automobili-c9570.firebaseapp.com","messagingSenderId":"240360166966","measurementId":"G-WPT5CG9VY4"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideStorage(() => getStorage())), provideRouter(routes)]
};
