import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { MyCalculatorModule } from './calculator/my-calculator.module';
import { MyNavigation } from './components/navigation/navigation.component';
import { MyEmptyPage } from './components/empty-route/empty-route.component';
import { DirectivesPageComponent } from './directives/directives.component';


// import { ObjectListComponent } from './object-list/object-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavigation,
    MyEmptyPage,
    DirectivesPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyCalculatorModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
