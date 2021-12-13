import React, { useReducer } from 'react';
import { types } from '../../types/types';
import { tareaContext } from './tareaContext';
import tareaReducer from './tareaReducer';


export const TareaState = props => {

    const initialState = {
        tareaActive: [],
        tareaSeleccinada: null,
        alerta: null
    }

    const [state, dispatch] = useReducer(tareaReducer, initialState);

    const getTareasDeUnProyecto = async (proyectoId) => {
        try {

            const token = localStorage.getItem('token');
            const api = `${process.env.REACT_APP_BACKEND_URL}api/tareas/${proyectoId}`;

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
                    type: types.getTareasPorIdProyecto,
                    payload: res.tareas
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    const addNuevaTareaAUnProyecto = async (tarea) => {

        try {
            const token = localStorage.getItem('token');
            const api = `${process.env.REACT_APP_BACKEND_URL}api/tareas`;

            const req = await fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify({
                    nombre: tarea.nombre,
                    proyectoId: tarea.proyectoId
                })
            });

            const res = await req.json();
            if (res.ok) {

                dispatch({
                    type: types.addNuevaTarea,
                    payload: res.tarea
                });
            }

        } catch (error) {
            console.log(error);
        }


    }

    const deleteTareaPorId = async (id, proyectoId) => {
        try {
            const token = localStorage.getItem('token');
            const api = `${process.env.REACT_APP_BACKEND_URL}api/tareas/${id}`;

            const req = await fetch(api, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify({
                    proyectoId: proyectoId
                })
            });

            const res = await req.json();

            if (res.ok) {
                dispatch({
                    type: types.deleteTarea,
                    payload: id
                });
            } else {
                dispatch({
                    type: types.alertaErrorProyectoTareas,
                    payload: res.msg
                })
            }

        } catch (error) {
            console.log(error);
            dispatch({
                type: types.alertaErrorProyectoTareas,
                payload: 'Error en el servidor'
            })
        }

    }

    const setEstadoTarea = async (tarea) => {

        
        try {

            const token = localStorage.getItem('token');
            const api = `${process.env.REACT_APP_BACKEND_URL}api/tareas/${tarea._id}`;

            const req = await fetch(api, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify({
                    proyectoId: tarea.proyectoId,
                    estado: tarea.estado,
                    nombre: tarea.nombre
                })
            });
            
            const res = await req.json();
            
            if (res.ok) {
                
                dispatch({
                    type: types.setEstadoTarea,
                    payload: res.tarea
                });
            } else {
                dispatch({
                    type: types.alertaErrorProyectoTareas,
                    payload: res.msg
                });
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: types.alertaErrorProyectoTareas,
                payload: 'Error en el servidor'
            });
        }
    }

    const selectTareaParaEditar = (tarea) => {

        dispatch({
            type: types.selectTarea,
            payload: tarea
        })
    }

    const updateTarea = async (tarea) => {

        try {
            const token = localStorage.getItem('token');
            const api = `${process.env.REACT_APP_BACKEND_URL}api/tareas/${tarea._id}`;

            const req = await fetch(api, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify({
                    nombre: tarea.nombre,
                    proyectoId: tarea.proyectoId
                })
            });
            const res = await req.json();

            if (res.ok) {
                dispatch({
                    type: types.updateTarea,
                    payload: res.tarea
                });
            }else{
                dispatch({
                    type: types.alertaErrorProyectoTareas,
                    payload: res.msg
                });
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: types.alertaErrorProyectoTareas,
                payload: 'Error en el servidor'
            });
        }

    }

    const cancelUpdateTarea = () => {
        dispatch({
            type: types.cancelUpdateTarea
        })
    }

    return (
        <tareaContext.Provider
            value={{
                arrayTareas: state.arrayTareas,
                tareasActive: state.tareaActive,
                tareaSeleccinada: state.tareaSeleccinada,

                getTareasDeUnProyecto,
                addNuevaTareaAUnProyecto,
                deleteTareaPorId,
                setEstadoTarea,
                selectTareaParaEditar,
                updateTarea,
                cancelUpdateTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}
