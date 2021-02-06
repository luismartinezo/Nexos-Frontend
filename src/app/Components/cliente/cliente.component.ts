import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Cliente } from "../../Models/cliente";
import { ClienteService } from "../../Services/cliente.service";

@Component({
  selector: "app-cliente",
  templateUrl: "./cliente.component.html",
  styleUrls: ["./cliente.component.css"]
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit() {
    this.cargarClientes();
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
}
