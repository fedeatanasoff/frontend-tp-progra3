import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DepartamentoService } from "../../servicios/departamento.services";

@Component({
  selector: "app-buscador",
  templateUrl: "./buscador.component.html",
  styleUrls: ["./buscador.component.css"]
})
export class BuscadorComponent implements OnInit {
  atletas: any[] = [];
  texto: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _departamentoService: DepartamentoService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.texto = params["texto"];
      this.atletas = this._departamentoService.buscarAtleta(params["texto"]);
      console.log(this.atletas);
      console.log(this.texto);
    });
  }
}
