import { ActionReducerMap } from '@ngrx/store'
import * as reducers from './reducers/index'

export interface AppState {
    usuarios: reducers.UsuariosState,
    usuario: reducers.UsuarioState
}

export const appReducers: ActionReducerMap<AppState> = {
    usuarios: reducers.UsuariosReducer,
    usuario: reducers.UsuarioReducer
}