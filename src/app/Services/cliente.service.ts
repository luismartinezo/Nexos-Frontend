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

  public crear(cliente: Cliente): Observable<any> {
    return this.httpClient.post<any>(
      this.clienteURL + "nuevo",
      cliente,
      cabecera
    );
  }

  public editar(cliente: Cliente, id: number): Observable<any> {
    console.log(cliente);
    return this.httpClient.put<any>(
      this.clienteURL + `actualizar/${id}`,
      cliente,
      cabecera
    );
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      this.clienteURL + `eliminar/${id}`,
      cabecera
    );
  }
}
