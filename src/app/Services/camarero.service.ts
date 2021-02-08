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
  camareroURL = "http://localhost:8080/api/v1/";
  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Camarero[]> {
    return this.httpClient.get<Camarero[]>(
      this.camareroURL + "camarero/lista",
      cabecera
    );
  }

  public detalle(id: number): Observable<Camarero> {
    return this.httpClient.get<Camarero>(
      this.camareroURL + `camarero/detalle/${id}`,
      cabecera
    );
  }

  public crear(camarero: Camarero): Observable<any> {
    return this.httpClient.post<any>(
      this.camareroURL + "camarero/nuevo",
      camarero,
      cabecera
    );
  }

  public editar(camarero: Camarero, id: number): Observable<any> {
    console.log(camarero);
    return this.httpClient.put<any>(
      this.camareroURL + `camarero/actualizar/${id}`,
      camarero,
      cabecera
    );
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      this.camareroURL + `camarero/borrar/${id}`,
      cabecera
    );
  }
}
