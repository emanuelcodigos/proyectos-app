import { types } from "../../types/types";


export default (state, action) => {

    switch(action.type){
        
        case types.setLoadingGlobal:
            return {
                ...state,
                loading: action.payload
            }
        case types.alertaErrorProyectoTareas:
            return {
               ...state,
               alerta: action.payload
            };
        case types.setArrayProyectos:
            return {
                ...state,
                proyectos: action.payload
            }
        case types.addNuevoProyecto:
            return {
                ...state,
                alerta: null,
                proyectos: [...state.proyectos, action.payload]
            }
        case types.setActiveProyect:
            return {
                ...state,
                activeProyect: action.payload
            }
        case types.deleteProyecto:
            return {
                ...state,
                activeProyect: null,
                proyectos: state.proyectos.filter(proyecto => proyecto._id !== action.payload)
            }
        default: 
        return state;
    }
}