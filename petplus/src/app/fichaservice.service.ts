import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from './models/animal';

@Injectable({
  providedIn: 'root'
})

export class FichaserviceService {
  getColor() {
    throw new Error('Method not implemented.');
  }

  URLAnimal :  string = 'http://127.0.0.1:8000/app_animal/animal/';
  URLcolor : string = "http://127.0.0.1:8000/app_color/color/";
  URLsexo : string = "http://127.0.0.1:8000/app_sexo/sexo/";
  URLespecie :string = "http://127.0.0.1:8000/app_especie/especie/";
  URLraza:string="http://127.0.0.1:8000/app_raza/raza/";
  URLestado:string="http://127.0.0.1:8000/app_estado/estado/";
  URLdueno:string="http://127.0.0.1:8000/app_dueno/dueno/"
  constructor(private http:HttpClient) { }

  getAnimal(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.URLAnimal);

  }
  


}
