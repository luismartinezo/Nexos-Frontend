import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../Models/cliente";

const cabecera = {
  headers: new HttpHeaders({ "Content-TYpe": "application/json" })
};

@Injectable()
export class ClienteService {
  clienteURL = "http://localhost:8080/api/v1/cliente/";

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.clienteURL + "lista", cabecera);
  }

  public detalle(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(
      this.clienteURL + `detalle/${id}`,
      cabecera
    );
  }

  public crear(producto: Cliente): Observable<any> {
    return this.httpClient.post<any>(
      this.clienteURL + "nuevo",
      producto,
      cabecera
    );
  }

  public editar(producto: Cliente, id: number): Observable<any> {
    console.log(producto);
    return this.httpClient.put<any>(
      this.clienteURL + `actualizar/${id}`,
      producto,
      cabecera
    );
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      this.clienteURL + `borrar/${id}`,
      cabecera
    );
  }
}
