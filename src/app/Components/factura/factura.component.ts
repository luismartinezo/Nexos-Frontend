import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Camarero } from "../../Models/camarero";
import { Cliente } from "../../Models/cliente";
import { Factura } from "../../Models/factura";
import { Mesa } from "../../Models/mesa";
import { CamareroService } from "../../Services/camarero.service";
import { ClienteService } from "../../Services/cliente.service";
import { FacturaService } from "../../Services/factura.service";
import { MesaService } from "../../Services/mesa.service";

@Component({
  selector: "app-factura",
  templateUrl: "./factura.component.html",
  styleUrls: ["./factura.component.css"]
})
export class FacturaComponent implements OnInit {
  clientes: Cliente[] = [];
  facturas: Factura[] = [];
  camareros: Camarero[] = [];
  mesas: Mesa[] = [];
  constructor(
    private facturaService: FacturaService,
    private clienteService: ClienteService,
    private camareroService: CamareroService,
    private mesaService: MesaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarFacturas();
  }

  cargarFacturas(): void {
    this.facturaService.listar().subscribe(
      data => {
        this.facturas = data;
        console.log(this.facturas);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
