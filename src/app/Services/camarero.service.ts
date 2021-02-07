import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environment/environment";
import { Camarero } from "../Models/camarero";

const cabecera = {
  headers: new HttpHeaders({ "Content-TYpe": "application/json" })
};

@Injectable()
export class CamareroService {
  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Camarero[]> {
    return this.httpClient.get<Camarero[]>(
      environment + "camarero/lista",
      cabecera
    );
  }

  public detalle(id: number): Observable<Camarero> {
    return this.httpClient.get<Camarero>(
      environment + `camarero/detalle/${id}`,
      cabecera
    );
  }

  public crear(camarero: Camarero): Observable<any> {
    return this.httpClient.post<any>(
      environment + "camarero/nuevo",
      camarero,
      cabecera
    );
  }

  public editar(camarero: Camarero, id: number): Observable<any> {
    console.log(camarero);
    return this.httpClient.put<any>(
      environment + `camarero/actualizar/${id}`,
      camarero,
      cabecera
    );
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      environment + `camarero/borrar/${id}`,
      cabecera
    );
  }
}
