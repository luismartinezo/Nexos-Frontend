import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CamareroComponent } from "./Components/camarero/camarero.component";
import { ClienteComponent } from "./Components/cliente/cliente.component";
import { CocineroComponent } from "./Components/cocinero/cocinero.component";
import { HomeComponent } from "./Components/home/home.component";
import { MesaComponent } from "./Components/mesa/mesa.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "clientes", component: ClienteComponent },
  { path: "cocineros", component: CocineroComponent },
  { path: "camareros", component: CamareroComponent },
  { path: "mesas", component: MesaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
