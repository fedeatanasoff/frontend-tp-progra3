import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { DepartamentosComponent } from "./components/departamentos/departamentos.component";
import { AtletasComponent } from "./components/atletas/atletas.component";
import { AboutComponent } from "./components/about/about.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";

const APP_ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "departamentos", component: DepartamentosComponent },
  { path: "atletas/:id", component: AtletasComponent },
  { path: "about", component: AboutComponent },
  { path: "buscar/:texto", component: BuscadorComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
