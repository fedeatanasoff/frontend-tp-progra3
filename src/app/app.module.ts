import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { DepartamentosComponent } from "./components/departamentos/departamentos.component";

// RUTAS
import { APP_ROUTING } from "./app.routes";
import { AtletasComponent } from './components/atletas/atletas.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DepartamentosComponent,
    AtletasComponent,
    AboutComponent
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
