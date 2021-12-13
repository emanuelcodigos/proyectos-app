import React, { useContext } from 'react';
import {proyectoContext} from '../../context/proyectos/proyectoContext';

import {tareaContext} from '../../context/tareas/tareaContext';

export const Proyecto = ({proyecto}) => {
    
    const contextProyecto = useContext(proyectoContext);
    const { setLoadingGlogal ,setActiveProyect} = contextProyecto;

    const contextTarea = useContext(tareaContext);
    const {getTareasDeUnProyecto} = contextTarea;

    const handleActiveProyect = async() => {
        setActiveProyect(proyecto);

        setLoadingGlogal(true);
        await getTareasDeUnProyecto(proyecto._id);
        setLoadingGlogal(false);

    }
    return (
        <li>
            <button onClick={handleActiveProyect} className="btn btn-blank">{proyecto.nombre}</button>
        </li>
    )
}
