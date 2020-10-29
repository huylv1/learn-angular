import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeroComponent } from './app-hero/app-hero.component';
import { SortPipe } from './pipe/sort.pipe';
import { CopyrightDirective } from './directive/copyright.directive';
import { HighlightDirective } from './directive/highlight.directive';
import { NumericDirective } from './directive/numeric.directive';
import { PermissionDirective } from './directive/permission.directive';
import { HeroesModule } from './heroes/heroes.module';
import { KeyLoggerComponent } from './key-logger/key-logger.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataServiceService } from './service/data-service.service';
import { HttpClientModule } from "@angular/common/http";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeroComponent,
    SortPipe,
    CopyrightDirective,
    HighlightDirective,
    NumericDirective,
    PermissionDirective,
    KeyLoggerComponent,
    PageNotFoundComponent,
    LoginComponent,
    ReactiveLoginComponent,
    HeroComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataServiceService),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
