import { ActionReducerMap } from '@ngrx/store'
import * as reducers from './reducers/index'

export interface AppState{
    usuarios : reducers.UsuariosState
}

export const appReducers: ActionReducerMap<AppState> = {
    usuarios: reducers.UsuarioReducer
}