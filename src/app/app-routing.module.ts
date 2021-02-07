import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CamareroComponent } from "./Components/camarero/camarero.component";
import { ClienteComponent } from "./Components/cliente/cliente.component";
import { NuevoClienteComponent } from "./Components/cliente/nuevo-cliente/nuevo-cliente.component";
import { FacturaComponent } from "./Components/factura/factura.component";
import { HomeComponent } from "./Components/home/home.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },

  { path: "clientes", component: ClienteComponent },
  {
    path: "nuevo-cliente",
    children: [{ path: "", component: NuevoClienteComponent }]
  },
  { path: "facturas", component: FacturaComponent },
  {
    path: "nueva-factura",
    children: [{ path: "", component: NuevoClienteComponent }]
  },
  { path: "camareros", component: CamareroComponent },
  {
    path: "nuevo-camarero",
    children: [{ path: "", component: NuevoClienteComponent }]
  },
  { path: "cocineros", component: ClienteComponent },
  {
    path: "nuevo-cocinero",
    children: [{ path: "", component: NuevoClienteComponent }]
  },
  { path: "mesas", component: ClienteComponent },
  {
    path: "nueva-mesa",
    children: [{ path: "", component: NuevoClienteComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
