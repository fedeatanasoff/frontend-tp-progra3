import { Component, OnInit } from "@angular/core";
import {
  DepartamentoService,
  Departamento
} from "../../servicios/heroes.services";
import { Router } from "@angular/router";

@Component({
  selector: "app-departamentos",
  templateUrl: "./departamentos.component.html",
  styleUrls: ["./departamentos.component.css"]
})
export class DepartamentosComponent implements OnInit {
  departamentos: Departamento[] = [];
  extension = ".png";

  constructor(
    private _departamentoService: DepartamentoService,
    private router: Router
  ) {
    console.log("constructor");
  }

  ngOnInit() {
    console.log("ng on init");

    this.departamentos = this._departamentoService.getDepartamentos();
    console.log(this.departamentos);
  }

  verAtletas(id: number) {
    console.log(id);
    this.router.navigate(["/atletas", id]);
  }
}
