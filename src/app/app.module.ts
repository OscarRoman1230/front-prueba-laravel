import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { ImageListComponent } from './components/image-list/image-list.component';

import { PixabayService } from "./services/pixabay.service";
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchListComponent } from './components/search-list/search-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ImageListComponent,
    NavigationComponent,
    SearchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PixabayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
