import { types } from "../../types/types";

export default (state, action) => {

    switch (action.type) {

        case types.alertaErrorProyectoTareas:
            return {
                ...state,
                alerta: action.payload
            };
        case types.getTareasPorIdProyecto:
            return {
                ...state,
                tareaActive: action.payload
            }
        case types.addNuevaTarea:
            return {
                ...state,
                tareaActive: [...state.tareaActive, action.payload]
            }
        case types.deleteTarea:
            return {
                ...state,
                tareaActive: state.tareaActive.filter(tarea => tarea._id !== action.payload)
            }
        case types.setEstadoTarea:
            return {
                ...state,
                tareaActive: state.tareaActive.map(tarea =>
                    tarea._id === action.payload._id ?
                        action.payload : tarea),
            }
        case types.selectTarea:
            return {
                ...state,
                tareaSeleccinada: action.payload
            }
        case types.updateTarea:
            return {
                ...state,
                tareaActive: state.tareaActive.map(tarea =>
                    tarea._id === action.payload._id ?
                        action.payload : tarea),
                tareaSeleccinada: null

            }
        case types.cancelUpdateTarea:
            return {
                ...state,
                tareaSeleccinada: null
            }

        default:
            return state;


    }
}