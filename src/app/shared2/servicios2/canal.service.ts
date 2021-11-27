import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanalService {

  constructor(private httpClient: HttpClient){ };

  public buscarCancion(artista: string, titulo: string): Observable<any> {
    return this.httpClient.get<any>(`https://api.lyrics.ovh/v1/${artista}/${titulo}`);
  }
}
