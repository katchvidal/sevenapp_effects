import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, switchMap } from 'rxjs/operators';
import { UsuarioService } from "src/app/services/usuario.service";
import * as fromUsuario from '../actions'



@Injectable()
export class UsuarioEffects {

    CargarUsuario$ = createEffect(() => this.actions$.pipe(
        ofType(fromUsuario.LOAD_ONE_USER),
        switchMap((action) => this.usuarioService.getUserbyID(action.id)
            .pipe(
                map(user => ({ type: `[USUARIO] Cargar Usuario Success`, user })),
                catchError(( err ) => of({ type:  '[USUARIO] Cargar Usuarios Fail', payload : err }))
            ))
    )


    );

    constructor(private actions$: Actions, private usuarioService: UsuarioService) { }


}

/**
     CargarUsuario$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(fromUsuario.LOAD_ONE_USER),
          switchMap((action) => {
            return this.usuarioService.getUserbyID(action.id).pipe(
              map((user: any) => fromUsuario.LOAD_ONE_USER_SUCCESS(user)),
              catchError((payload) => of(fromUsuario.LOAD_ONE_USER_FAIL(payload))),
           ); 
          }),  
        )
      }
 */