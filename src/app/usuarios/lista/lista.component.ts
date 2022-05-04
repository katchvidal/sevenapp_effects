import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { LOAD_USER } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = []
  loading: boolean = false
  error: any;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('usuarios').subscribe(
      users => {
        this.usuarios = users.users;
        this.loading = users.loading;
        this.error = users.error
      }
    )
    this.store.dispatch(LOAD_USER())
  }
}
