import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { HomeComponent } from './components/home/home.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, DepartamentosComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
