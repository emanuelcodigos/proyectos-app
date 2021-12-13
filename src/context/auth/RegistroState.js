import React, { useReducer } from "react";
import { types } from "../../types/types";
import registroReducer from '../auth/registroReducer';
import { registroContext } from '../auth/registroContext';

export const RegistroState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: false,
        alerta: null,
        usuario: null,
        loading: false
    }

    const [state, dispatch] = useReducer(registroReducer, initialState);

    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: types.alertaRegistro,
            payload: {
                msg,
                categoria
            }
        });
    }

    const selLoading = () => {
        dispatch({
            type: types.setLoadingAuth
        })
    }

    const startRegistraUsuario = async (datos) => {
        try {

            const api = `${process.env.REACT_APP_BACKEND_URL}api/usuarios`;
            const req = await fetch(api, {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: datos.nombre,
                    email: datos.email,
                    password: datos.password
                })
            });

            const res = await req.json();

            if (res.ok) {
                dispatch({
                    type: types.registroExitoso,
                    payload: {
                        token: res.token,
                        uid: res.uid,
                        nombre: res.nombre
                    }
                });
                mostrarAlerta('Registrado correctamente', 'success');
            } else {
                dispatch({
                    type: types.registroDenegado,
                    payload: res.msg
                });
                mostrarAlerta(res.msg, 'error');
            }

        } catch (error) {
            console.log(error);
            dispatch({
                type: types.registroDenegado,
                payload: 'Error en el servidor'
            });
        }
    }

    const startLoginUsuario = async (datos) => {
        const api = `${process.env.REACT_APP_BACKEND_URL}api/auth`;

        try {
            const req = await fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: datos.email,
                    password: datos.password
                })
            });

            const res = await req.json();
            

            if (res.ok) {
                dispatch({
                    type: types.registroExitoso,
                    payload: {
                        token: res.token,
                        uid: res.uid,
                        nombre: res.nombre
                    }
                });
                mostrarAlerta('Autenticado correctamente', 'success');

            } else {
                dispatch({
                    type: types.registroDenegado,
                    payload: res.msg
                });
                mostrarAlerta(res.msg, 'error');
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: types.registroDenegado,
                payload: 'Error en el servidor'
            });
        }
    }

    const resetearAlertAuth = () => {
        dispatch({
            type: types.setAlertaLoading
        });
    }

    const usuarioAutenticado = async (token) => {

        try {
            const api = `${process.env.REACT_APP_BACKEND_URL}api/auth`;

            const req = await fetch(api, {

                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                }
            });
            const res = await req.json();

            if(res.ok){
                
                dispatch({
                    type: types.autenticadoCorrectamente,
                    payload: {
                        uid: res.usuario.id,
                        nombre: res.usuario.nombre
                    }
                });
            }else{
                dispatch({
                    type: types.registroDenegado,
                    payload: res.msg
                });
            }
            
        } catch (error) {
            console.log(error);
            dispatch({
                type: types.registroDenegado,
                payload: 'Error en el servidor'
            });
        }
    }

    const logOut = () => {
        dispatch({
            type: types.logOut
        });
        mostrarAlerta('Sesion cerrada correctamente', 'success');


    }


    return (
        <registroContext.Provider
            value={{

                loading: state.loading,
                alerta: state.alerta,
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,

                mostrarAlerta,
                selLoading,
                startRegistraUsuario,
                startLoginUsuario,
                resetearAlertAuth,
                usuarioAutenticado,
                logOut
            }}
        >
            {props.children}
        </registroContext.Provider>
    )
}



