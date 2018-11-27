import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DepartamentoService } from "../../servicios/departamento.services";

@Component({
  selector: "app-atletas",
  templateUrl: "./atletas.component.html",
  styleUrls: ["./atletas.component.css"]
})
export class AtletasComponent implements OnInit {
  depto: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _departamentoService: DepartamentoService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.depto = this._departamentoService.getDeptoAtletas(params["id"]);
    });
  }

  ngOnInit() {}
}
