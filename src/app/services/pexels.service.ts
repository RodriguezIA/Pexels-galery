import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

// importamos las librerias necesarias (rxjs y http)
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

// importamos las interfaces
import { foto, fotosSelecionadas } from '../models/pexels-fotos';
import { map } from 'rxjs-compat/operator/map';


@Injectable({
  providedIn: 'root'
})
export class PexelsService {
  // variables que usaremos
  private pexelUrl = 'https://api.pexels.com/v1/curated?per_page=10';
  private apikey = environment.apiKey;

  constructor(private http: HttpClient) { }

  public getFotos(): Observable<any> {
    const url = `${this.pexelUrl}`;
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.apikey
    });
    const options = {
      headers:httpHeaders,
      responseType: 'json' as 'json'
    }
    return this.http.get<any>(url, options);
  }
}
