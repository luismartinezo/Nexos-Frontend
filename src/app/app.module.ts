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
import { NuevoCocineroComponent } from './Components/cocinero/nuevo-cocinero/nuevo-cocinero.component';
import { NuevoCamareroComponent } from './Components/camarero/nuevo-camarero/nuevo-camarero.component';
import { NuevaFacturaComponent } from './Components/factura/nueva-factura/nueva-factura.component';
import { NuevaMesaComponent } from './Components/mesa/nueva-mesa/nueva-mesa.component';
import { FacturaService } from './Services/factura.service';
import { CamareroService } from './Services/camarero.service';
import { MesaService } from './Services/mesa.service';
import { CocineroService } from './Services/cocinero.service';
import { DetalleFacturaService } from './Services/detalle-factura.service';
import { DetalleFacturaComponent } from './Components/detalle-factura/detalle-factura.component';

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
    NuevoClienteComponent,
    NuevoCocineroComponent,
    NuevoCamareroComponent,
    NuevaFacturaComponent,
    NuevaMesaComponent,
    DetalleFacturaComponent
  ],
  bootstrap: [AppComponent],
  providers: [ClienteService, FacturaService, CamareroService, MesaService, CocineroService, DetalleFacturaService]
})
export class AppModule {}
