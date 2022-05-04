import { createAction, props } from "@ngrx/store";
import { Usuario } from "src/app/models/usuario.model";



export const LOAD_USER = createAction(
    `[USUARIOS] Cargar Usuarios`
)

export const LOAD_USER_SUCCESS = createAction(
    `[USUARIOS] Cargar Usuarios Success`,
    props<{users : Usuario[] }>()
)

export const LOAD_USER_FAIL = createAction(
    `[USUARIOS] Cargar Usuarios Fail`,
    props<{ payload : any }>()
)


