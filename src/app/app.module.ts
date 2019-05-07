import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngMatModule } from './common/ang-mat/ang-mat.module';
import { HomeComponent } from './home/home.component';

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers, TodosEffects, metaReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ AppComponent, HomeComponent ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AngMatModule,
        AppRoutingModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([ TodosEffects ]),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        StoreRouterConnectingModule.forRoot({ stateKey: 'router' })
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
