import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { LOAD_ONE_USER } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  user : Usuario | any;
  error: any
  loading: boolean | any

  constructor( private route : ActivatedRoute, private store : Store<AppState> ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params  => {
        const id = params['id']
        this.store.dispatch( LOAD_ONE_USER({ id }))
      }
    )

    this.store.select('usuario').subscribe(
      usuario => {
        this.user = usuario.user
        this.error = usuario.error
        this.loading = usuario.loading
      }
    )
  }

}
