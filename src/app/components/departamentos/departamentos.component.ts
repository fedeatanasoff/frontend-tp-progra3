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
  optimizacion = 0;

  constructor(
    private _departamentoService: DepartamentoService,
    private router: Router
  ) {
    this.atletas = this._departamentoService.getAtletas();
    this.optimizacion = this._departamentoService
      .getSolver()
      .optimizacion.toFixed(2);
  }

  ngOnInit() {
    this.departamentos = this._departamentoService.getDepartamentos();
  }

  verAtletas(id: number) {
    const idx = id - 1;
    this.router.navigate(["/atletas", idx]);
  }

  getAtletas() {
    //console.log(this.atletas);
  }
}
