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
  msjOK = "";
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
  eliminarCliente(id: number): void {
    console.log(id);
    if (confirm(`Seguro que desea eliminar el registro ${id}`)) {
      this.clienteService.borrar(id).subscribe(data => {
        this.msjOK = data.message;
        alert(this.msjOK);
        this.cargarClientes();
        this.router.navigate(["clientes"]);
      });
    }
    // if(id != null || id ==0)
    // this.clienteService.borrar()
  }
}
