import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Cliente } from "../../../Models/cliente";
import { ClienteService } from "../../../Services/cliente.service";

@Component({
  selector: "app-nuevo-cliente",
  templateUrl: "./nuevo-cliente.component.html",
  styleUrls: ["./nuevo-cliente.component.css"]
})
export class NuevoClienteComponent implements OnInit {
  form: any = {
    id: 0,
    nombre: "",
    apellido1: "",
    apellido2: "",
    observaciones: ""
  };
  cliente: Cliente;
  mensajeOK = "";
  mensajeFail = "";
  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit() {}

  onCreate(form): void {
    console.log(form);
    this.clienteService.crear(this.form).subscribe(
      data => {
        this.mensajeOK = data.message;
        alert(this.mensajeOK);
        this.router.navigate(["clientes"]);
      },
      (err: any) => {
        this.mensajeFail = err.error.message;
      }
    );
  }
}
