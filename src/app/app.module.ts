import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./Shared/footer/footer.component";
import { NavbarComponent } from "./Shared/navbar/navbar.component";
import { HomeComponent } from "./Components/home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { ClienteComponent } from './Components/cliente/cliente.component';
import { CocineroComponent } from './Components/cocinero/cocinero.component';
import { CamareroComponent } from './Components/camarero/camarero.component';
import { MesaComponent } from './Components/mesa/mesa.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  declarations: [AppComponent, FooterComponent, NavbarComponent, HomeComponent, ClienteComponent, CocineroComponent, CamareroComponent, MesaComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
