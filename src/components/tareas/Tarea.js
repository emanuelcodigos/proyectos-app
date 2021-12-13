import React, { useContext } from 'react';
import {tareaContext} from '../../context/tareas/tareaContext';
import {proyectoContext} from '../../context/proyectos/proyectoContext';
import { Spinner } from '../recursos/Spinner';

export const Tarea = ({tarea}) => {

    const context = useContext(tareaContext);
    const {deleteTareaPorId, setEstadoTarea, selectTareaParaEditar} = context;

    const contextProyecto = useContext(proyectoContext);
    const {loading, setLoadingGlogal} = contextProyecto;

    const handleDelete = async() => {
        setLoadingGlogal(true);
        await deleteTareaPorId(tarea._id, tarea.proyectoId);
        setLoadingGlogal(false);
    }

    const handleSetEstado = async() => {
        
        setLoadingGlogal(true)
        if(tarea.estado){
            tarea.estado = false;
        }else{
            tarea.estado = true;
        }
        await setEstadoTarea(tarea);

        setLoadingGlogal(false);
    }

    const handleEdit = async() => {
        setLoadingGlogal(true);
        await selectTareaParaEditar(tarea);
        setLoadingGlogal(false);
    }
    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            {
                (loading) && <Spinner/>
            }

            <div className="estado">
                {
                    (tarea.estado) ? (<button onClick={handleSetEstado} className="completo">Completo</button>)
                    : (<button onClick={handleSetEstado} className="incompleto">Incompleto</button>)
                }
            </div>

            <div className="acciones">
                <button onClick={handleEdit} className="btn btn-primario">Editar</button>
                <button onClick={handleDelete} className="btn btn-secundario">Eliminar</button>
            </div>
        </li>
    )
}
