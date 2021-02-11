import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { Exo1Component } from './components/exo1/exo1.component';
import { Exo2Component } from './components/exo2/exo2.component';
import { ListeComponent } from './components/cv/liste/liste.component';
import { ItemComponent } from './components/cv/item/item.component';
import { CvComponent } from './components/cv/cv/cv.component';
import { DetailComponent } from './components/cv/detail/detail.component';
import { StyleComponent } from './components/styles/style/style.component';
import { RandomColorDirective } from './directives/random-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    Exo1Component,
    Exo2Component,
    ListeComponent,
    ItemComponent,
    CvComponent,
    DetailComponent,
    StyleComponent,
    RandomColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
