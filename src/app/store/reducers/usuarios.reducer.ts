import { createReducer, on } from "@ngrx/store";
import { Usuario } from "src/app/models/usuario.model";
import { LOAD_USER, LOAD_USER_FAIL, LOAD_USER_SUCCESS } from "../actions/index";

export interface UsuariosState {
    users: Usuario[] | any;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initialState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

export const UsuariosReducer = createReducer(
    initialState,

    on(LOAD_USER, state => ({ ...state, loading: true, error: null })),

    on(LOAD_USER_SUCCESS, (state, { users }) => {
        return {
            users: [...users],
            loaded: true,
            loading: false,
            error: null
        }
    }),

    on(LOAD_USER_FAIL, (state: any, { payload }) => {
        return {
            loaded: false,
            loading: false,
            users: [],
            error: {
                status: payload.status,
                message: payload.message,
                url: payload.url
            }
        }
    })

)
