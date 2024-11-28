import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http : HttpClient) { }

  gravar(obj: Paciente): Observable<any>{
    return this.http.put("http://localhost:8080/api/paciente", obj)
  }
}
