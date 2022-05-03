import { createReducer, on } from "@ngrx/store";
import { Usuario } from "src/app/models/usuario.model";
import * as fromUsuarios from '../actions/index'

export interface UsuariosState {
    users: Usuario[];
    loaded: boolean;
    loading: boolean;
    error : any;
}

const initialState : UsuariosState = {
    users : [],
    loaded : false,
    loading : false,
    error:  null
}

export const UsuarioReducer = createReducer(
    initialState,

    on(fromUsuarios.LOAD_USER, ( state : any ) => {
        return {
            ...state,
           loading : true,         
        }
    }),

    on(fromUsuarios.LOAD_USER_SUCCESS, ( state: any, { usuarios } : any ) => {
        return {
            ...state,
            loading: false,
            loaded: true,
            users: [...usuarios]
        }
    }),
    
    on(fromUsuarios.LOAD_USER_FAIL, ( state : any) => {
        return {
            ...state,
            loaded: false,
            loading: false,
            users: null,
            error : state.payload
        }
    })

)