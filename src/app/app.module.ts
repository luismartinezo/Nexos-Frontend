import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./Shared/footer/footer.component";
import { NavbarComponent } from "./Shared/navbar/navbar.component";
import { HomeComponent } from "./Components/home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { ClienteComponent } from "./Components/cliente/cliente.component";
import { CocineroComponent } from "./Components/cocinero/cocinero.component";
import { CamareroComponent } from "./Components/camarero/camarero.component";
import { MesaComponent } from "./Components/mesa/mesa.component";
import { ClienteService } from "./Services/cliente.service";
import { HttpClientModule } from "@angular/common/http";
import { FacturaComponent } from './Components/factura/factura.component';
import { NuevoClienteComponent } from './Components/cliente/nuevo-cliente/nuevo-cliente.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ClienteComponent,
    CocineroComponent,
    CamareroComponent,
    MesaComponent,
    FacturaComponent,
    NuevoClienteComponent
  ],
  bootstrap: [AppComponent],
  providers: [ClienteService]
})
export class AppModule {}
