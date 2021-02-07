import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environment/environment";
import { Cliente } from "../Models/cliente";

const cabecera = {
  headers: new HttpHeaders({ "Content-TYpe": "application/json" })
};

@Injectable()
export class ClienteService {
  clienteURL = "http://localhost:8080/api/v1/cliente/";

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(
      environment + "cliente/lista",
      cabecera
    );
  }

  public detalle(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(
      environment + `cliente/detalle/${id}`,
      cabecera
    );
  }

  public crear(cliente: Cliente): Observable<any> {
    return this.httpClient.post<any>(
      environment + "cliente/nuevo",
      cliente,
      cabecera
    );
  }

  public editar(cliente: Cliente, id: number): Observable<any> {
    console.log(cliente);
    return this.httpClient.put<any>(
      environment + `cliente/actualizar/${id}`,
      cliente,
      cabecera
    );
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      environment + `cliente/borrar/${id}`,
      cabecera
    );
  }
}
