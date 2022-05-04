import { createReducer, on } from "@ngrx/store";
import { Usuario } from "src/app/models/usuario.model";
import { LOAD_ONE_USER, LOAD_ONE_USER_FAIL, LOAD_ONE_USER_SUCCESS } from "../actions";



export interface UsuarioState {
    user: Usuario | any;
    loaded: boolean;
    loading: boolean;
    error: any
}

const initialState: UsuarioState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
}

export const UsuarioReducer = createReducer(
    initialState,
    on(LOAD_ONE_USER, (state ) =>
        ({ ...state, loading: true, error: null  })),

    on(LOAD_ONE_USER_SUCCESS, (state, { user }) =>
        ({ ...state, loading: false, loaded: true, user: {... user } })),

    on(LOAD_ONE_USER_FAIL, (state: any, { payload }) => {
        return {
            ...state,
            loaded: false,
            loading: false,
            error: {
                status: payload.status,
                message: payload.message,
                url: payload.url
            }
        }
    }    
    ),

)