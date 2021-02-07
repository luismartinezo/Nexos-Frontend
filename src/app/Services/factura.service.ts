import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environment/environment";
import { Factura } from "../Models/factura";

const cabecera = {
  headers: new HttpHeaders({ "Content-TYpe": "application/json" })
};

@Injectable()
export class FacturaService {
  constructor(private httpClient: HttpClient) {}

  public listar(): Observable<Factura[]> {
    return this.httpClient.get<Factura[]>(
      environment + "factura/lista",
      cabecera
    );
  }

  public detalle(id: number): Observable<Factura> {
    return this.httpClient.get<Factura>(
      environment + `factura/detalle/${id}`,
      cabecera
    );
  }

  public crear(producto: Factura): Observable<any> {
    return this.httpClient.post<any>(
      environment + "factura/nuevo",
      producto,
      cabecera
    );
  }

  public editar(producto: Factura, id: number): Observable<any> {
    console.log(producto);
    return this.httpClient.put<any>(
      environment + `factura/actualizar/${id}`,
      producto,
      cabecera
    );
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      environment + `factura/borrar/${id}`,
      cabecera
    );
  }
}
