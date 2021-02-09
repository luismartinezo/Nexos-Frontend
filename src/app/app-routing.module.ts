import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CamareroComponent } from "./Components/camarero/camarero.component";
import { NuevoCamareroComponent } from "./Components/camarero/nuevo-camarero/nuevo-camarero.component";
import { ClienteComponent } from "./Components/cliente/cliente.component";
import { NuevoClienteComponent } from "./Components/cliente/nuevo-cliente/nuevo-cliente.component";
import { CocineroComponent } from "./Components/cocinero/cocinero.component";
import { NuevoCocineroComponent } from "./Components/cocinero/nuevo-cocinero/nuevo-cocinero.component";
import { FacturaComponent } from "./Components/factura/factura.component";
import { NuevaFacturaComponent } from "./Components/factura/nueva-factura/nueva-factura.component";
import { HomeComponent } from "./Components/home/home.component";
import { MesaComponent } from "./Components/mesa/mesa.component";
import { NuevaMesaComponent } from "./Components/mesa/nueva-mesa/nueva-mesa.component";

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
    children: [{ path: "", component: NuevaFacturaComponent }]
  },
  {
   path: "nueva-factura",
    children: [{ path: "", component: NuevaFacturaComponent }]
  },
  { path: "camareros", component: CamareroComponent },
  {
    path: "nuevo-camarero",
    children: [{ path: "", component: NuevoCamareroComponent }]
  },
  { path: "cocineros", component: CocineroComponent },
  {
    path: "nuevo-cocinero",
    children: [{ path: "", component: NuevoCocineroComponent }]
  },
  { path: "mesas", component: MesaComponent },
  {
    path: "nueva-mesa",
    children: [{ path: "", component: NuevaMesaComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
