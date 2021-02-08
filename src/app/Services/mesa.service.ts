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
  mesaURL = "http://localhost:8080/api/v1/";
  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Mesa[]> {
    return this.httpClient.get<Mesa[]>(this.mesaURL + "mesa/lista", cabecera);
  }

  public detalle(id: number): Observable<Mesa> {
    return this.httpClient.get<Mesa>(
      this.mesaURL + `mesa/detalle/${id}`,
      cabecera
    );
  }

  public crear(mesa: Mesa): Observable<any> {
    return this.httpClient.post<any>(
      this.mesaURL + "mesa/nuevo",
      mesa,
      cabecera
    );
  }

  public editar(mesa: Mesa, id: number): Observable<any> {
    console.log(mesa);
    return this.httpClient.put<any>(
      this.mesaURL + `mesa/actualizar/${id}`,
      mesa,
      cabecera
    );
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      this.mesaURL + `mesa/borrar/${id}`,
      cabecera
    );
  }
}
