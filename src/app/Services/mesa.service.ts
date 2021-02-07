import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environment/environment";
import { Mesa } from "../Models/mesa";

const cabecera = {
  headers: new HttpHeaders({ "Content-TYpe": "application/json" })
};

@Injectable()
export class MesaService {
  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Mesa[]> {
    return this.httpClient.get<Mesa[]>(environment + "mesa/lista", cabecera);
  }

  public detalle(id: number): Observable<Mesa> {
    return this.httpClient.get<Mesa>(
      environment + `mesa/detalle/${id}`,
      cabecera
    );
  }

  public crear(mesa: Mesa): Observable<any> {
    return this.httpClient.post<any>(
      environment + "mesa/nuevo",
      mesa,
      cabecera
    );
  }

  public editar(mesa: Mesa, id: number): Observable<any> {
    console.log(mesa);
    return this.httpClient.put<any>(
      environment + `mesa/actualizar/${id}`,
      mesa,
      cabecera
    );
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      environment + `mesa/borrar/${id}`,
      cabecera
    );
  }
}
