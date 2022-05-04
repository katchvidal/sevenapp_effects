import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect, act } from '@ngrx/effects';
import { EMPTY, of } from "rxjs";
import { catchError, exhaustMap, map, mergeMap, skipWhile, switchMap } from 'rxjs/operators';
import { UsuarioService } from "src/app/services/usuario.service";



@Injectable()
export class UsuariosEffects {

    CargarUsuario$ = createEffect(() => this.actions$.pipe(
        ofType(`[USUARIOS] Cargar Usuarios`),
        mergeMap(() => this.usuarioService.getUser()
          .pipe(
            map(users => ({ type:  `[USUARIOS] Cargar Usuarios Success`, users: users })),
            catchError(( err ) => of({ type: `[USUARIOS] Cargar Usuarios Fail`, payload : err }))
          ))
        )
      );

    constructor(private actions$: Actions, private usuarioService: UsuarioService) { }


}

