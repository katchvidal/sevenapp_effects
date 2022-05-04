import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public httpClient: HttpClient) { }

  getUser() {
    return this.httpClient.get(`https://reqres.in/api/users?per_page=6`)
      .pipe(
        map((resp: any) => {
          return resp.data
        })
      )
  }

  getUserbyID(id: string) {
    return this.httpClient.get(`https://reqres.in/api/users/${ id }`).pipe(
      map((resp: any) => {
        return resp.data
      })
    )
  }
}
