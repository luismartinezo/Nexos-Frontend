import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Cliente } from "../../../Models/cliente";
import { ClienteService } from "../../../Services/cliente.service";

@Component({
  selector: "app-agregar",
  templateUrl: "./agregar.component.html",
  styleUrls: ["./agregar.component.css"]
})
export class AgregarComponent implements OnInit {
  form: any = {};
  cliente: Cliente;
  mensajeFail = "";
  mensajeOK = "";
  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit() {}
  onCreate(): void {
    this.clienteService.crear(this.form).subscribe(
      data => {
        this.mensajeOK = data.mensaje;
        alert(this.mensajeOK);
        this.router.navigate(["clientes"]);
      },
      (err: any) => {
        this.mensajeFail = err.error.mensaje;
      }
    );
  }
}
