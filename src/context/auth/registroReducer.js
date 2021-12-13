import { types } from "../../types/types";

export default (state, action) => {

    switch (action.type) {

        case types.verificarRegistro:
            return {
                ...state,
                verificado: action.payload
            };
        case types.alertaRegistro:
            return {
                ...state,
                alerta: action.payload
            };
        case types.setLoadingAuth:
            return {
                ...state,
                loading: (!state.loading)
            };
        case types.registroExitoso:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                autenticado: true,
                token: action.payload.token,
                usuario: {
                    uid: action.payload.uid,
                    nombre: action.payload.nombre
                }
            };
        case types.autenticadoCorrectamente:
            return {
                ...state,
                autenticado: true,
                usuario: {
                    uid: action.payload.uid,
                    nombre: action.payload.nombre
                }
            };
        case types.registroDenegado:
        case types.loginError:
            localStorage.removeItem('token');
            return {
                 ...state,
                 token: null,
                 autenticado: false
             };
        case types.setAlertaLoading: 
            return {
                ...state,
                alerta: null
            };
        case types.logOut:
            localStorage.removeItem('token');
            return {
                ...state,
                autenticado: false,
                token: null,
                usuario: null
            }

        default:
            return state;
    }
}