import { createAction, props  } from "@ngrx/store";
import { Usuario } from '../../models/usuario.model'

export const LOAD_ONE_USER = createAction(
    '[USUARIO] Cargar Usuario',
    props<{ id : any }>()
)

export const LOAD_ONE_USER_SUCCESS = createAction(
    '[USUARIO] Cargar Usuario Success',
    props<{ user: Usuario }>()
)

export const LOAD_ONE_USER_FAIL = createAction(
    '[USUARIO] Cargar Usuarios Fail',
    props<{ payload : any }>()
)