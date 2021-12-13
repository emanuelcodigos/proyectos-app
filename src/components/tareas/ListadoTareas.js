import React, { useContext, useEffect } from 'react';



import { Tarea } from './Tarea';
import { proyectoContext } from '../../context/proyectos/proyectoContext';
import { tareaContext } from '../../context/tareas/tareaContext';
import { Spinner } from '../recursos/Spinner';
import Swal from 'sweetalert2';

export const ListadoTareas = () => {

    const contextProyectos = useContext(proyectoContext);
    const { loading, proyectoActivo, alerta, setLoadingGlogal, deleteProyecto } = contextProyectos;
    const contextTarea = useContext(tareaContext);
    const { tareasActive } = contextTarea;

    useEffect(() => {

        if(alerta !== null) {
            Swal.fire('Error',alerta,'error');
        }
        
    }, [alerta]);

    if (!proyectoActivo) return null;

    const handleDelete = async () => {
        setLoadingGlogal(true);
        await deleteProyecto(proyectoActivo._id);

        setLoadingGlogal(false);
    }


    return (
        <>
            {
                (!proyectoActivo) ? (<h2 className="mensaje error">Selecciona un proyecto</h2>)

                    : (<h2>{proyectoActivo.nombre}</h2>)
            }
            <ul className="listado-tareas">
                {tareasActive.length === 0 ?
                    (<li className="tarea"><p>No hay tareas</p></li>)
                    :

                    (

                        tareasActive.map(tarea => (


                            <Tarea
                                key={tarea._id}
                                tarea={tarea}
                            />

                        ))
                    )
                }
            </ul>

            {
                (loading) ? (<Spinner/>)
                :
                (<button
                    type="button"
                    className="btn btn-eliminar"
                    onClick={handleDelete}
                >Eliminar proyecto &times;</button>)
            }
        </>
    )
}
