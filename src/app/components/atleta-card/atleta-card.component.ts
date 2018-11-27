import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-atleta-card",
  templateUrl: "./atleta-card.component.html",
  styleUrls: ["./atleta-card.component.css"]
})
export class AtletaCardComponent implements OnInit {
  @Input() heroe: any = {};
  constructor() {}

  ngOnInit() {}
}
