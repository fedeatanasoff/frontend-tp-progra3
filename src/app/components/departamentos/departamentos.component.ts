import { Component, OnInit } from "@angular/core";
import {
  DepartamentoService,
  Departamento
} from "../../servicios/departamento.services";
import { Router } from "@angular/router";

@Component({
  selector: "app-departamentos",
  templateUrl: "./departamentos.component.html",
  styleUrls: ["./departamentos.component.css"]
})
export class DepartamentosComponent implements OnInit {
  departamentos: Departamento[] = [];
  extension = ".png";
  atletas: any[] = [];

  constructor(
    private _departamentoService: DepartamentoService,
    private router: Router
  ) {
    console.log("constructor");
    this.atletas = this._departamentoService.getAtletas();
  }

  ngOnInit() {
    console.log("ng on init");

    this.departamentos = this._departamentoService.getDepartamentos();
    console.log(this.departamentos);
  }

  verAtletas(id: number) {
    const idx = id - 1;
    this.router.navigate(["/atletas", idx]);
  }

  getAtletas() {
    console.log(this.atletas);
  }
}
