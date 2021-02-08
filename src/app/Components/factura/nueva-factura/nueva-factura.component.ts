import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Camarero } from "../../../Models/camarero";
import { Cliente } from "../../../Models/cliente";
import { Factura } from "../../../Models/factura";
import { Mesa } from "../../../Models/mesa";
import { CamareroService } from "../../../Services/camarero.service";
import { ClienteService } from "../../../Services/cliente.service";
import { FacturaService } from "../../../Services/factura.service";
import { MesaService } from "../../../Services/mesa.service";

@Component({
  selector: "app-nueva-factura",
  templateUrl: "./nueva-factura.component.html",
  styleUrls: ["./nueva-factura.component.css"]
})
export class NuevaFacturaComponent implements OnInit {
  form: any = {
    id: 0,
    fecha: Date,
    camarero_id: 0,
    cliente_id: 0,
    mesa_id: 0
  };
  clientes: Cliente[] = [];
  facturas: Factura[] = [];
  camareros: Camarero[] = [];
  mesas: Mesa[] = [];
  mensajeFail = "";
  mensajeOK = "";

  constructor(
    private facturaService: FacturaService,
    private clienteService: ClienteService,
    private camareroService: CamareroService,
    private mesaService: MesaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarClientes();
    this.cargarCamareros();
    this.cargarMesas();
  }

onCreate(form): void {
    console.log(form);
    this.facturaService.crear(this.form).subscribe(
      data => {
        this.mensajeOK = data.message;
        alert(this.mensajeOK);
        this.router.navigate(["facturas"]);
      },
      (err: any) => {
        this.mensajeFail = err.error.message;
      }
    );
  }
  
  cargarClientes(): void {
    this.clienteService.lista().subscribe(
      data => {
        this.clientes = data;
        console.log(this.clientes);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  cargarCamareros(): void {
    this.camareroService.lista().subscribe(
      data => {
        this.camareros = data;
        console.log(this.camareros);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  cargarMesas(): void {
    this.mesaService.lista().subscribe(
      data => {
        this.mesas = data;
        console.log(this.mesas);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
