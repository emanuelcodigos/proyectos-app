import React, { useReducer } from 'react';
import { types } from '../../types/types';
import { proyectoContext } from './proyectoContext';
import {proyectoReducer} from './proyectoReducer';

export const ProyectoState = props => {


    const initialState = {
        loading: false,
        alerta: null,
        activeProyect: null,
        proyectos: []
    }

    //Dispatch de funciones

    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //funciones CRUD

    const setLoadingGlogal = (opcion) => {
        dispatch({
            type: types.setLoadingGlobal,
            payload: opcion
        });
    }

    const setArrayProyectos = async () => {

        try {

            const api = `${process.env.REACT_APP_BACKEND_URL}api/proyectos`;
            const token = localStorage.getItem('token');

            const req = await fetch(api, {

                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                }
            });

            const res = await req.json();

            if (res.ok) {
                dispatch({
                    type: types.setArrayProyectos,
                    payload: res.proyectos
                });
            } else {
                dispatch({
                    type: types.setArrayProyectos,
                    payload: []
                });
                dispatch({
                    type: types.alertaErrorProyectoTareas,
                    payload: res.msg
                });
            }

        } catch (error) {
            console.log(error);
        }
    }

    const addNuevoProyecto = async (proyecto) => {
        
        try {
            const api = `${process.env.REACT_APP_BACKEND_URL}api/proyectos`;
            const token = localStorage.getItem('token');

            const req = await fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify({
                    nombre: proyecto.nombre
                })
            });

            const res = await req.json();
             
            if(res.ok){
                dispatch({
                    type: types.addNuevoProyecto,
                    payload: res.proyecto
                });
            }else{
                dispatch({
                    type: types.alertaErrorProyectoTareas,
                    payload: res.msg
                });
            }

        } catch (error) {
            console.log(error);
        }

    }

    //Activar un proyecto
    const setActiveProyect = (proyecto) => {

        dispatch({
            type: types.setActiveProyect,
            payload: proyecto
        })
    }

    const deleteProyecto = async (id) => {

        try {

            const api = `${process.env.REACT_APP_BACKEND_URL}api/proyectos/${id}`;
            const token = localStorage.getItem('token');

            const req = await fetch(api, {

                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                }
            });

            const res = await req.json();

            if (res.ok) {
                dispatch({
                    type: types.deleteProyecto,
                    payload: id
                });
            } else {
                dispatch({
                    type: types.alertaErrorProyectoTareas,
                    payload: res.msg
                });
            }

        } catch (error) {
            console.log(error);
        }


    }


    return (
        <proyectoContext.Provider
            value={{
                loading: state.loading,
                arrayProyectos: state.proyectos,
                proyectoActivo: state.activeProyect,
                alerta: state.alerta,

                setLoadingGlogal,
                setArrayProyectos,
                addNuevoProyecto,
                setActiveProyect,
                deleteProyecto

            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
} 