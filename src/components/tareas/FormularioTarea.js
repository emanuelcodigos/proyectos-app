import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';

import { useForm } from '../../hooks/useForm';
import { proyectoContext } from '../../context/proyectos/proyectoContext';
import { tareaContext } from '../../context/tareas/tareaContext';



export const FormularioTarea = () => {

    const context = useContext(proyectoContext);
    const { proyectoActivo } = context;
    const contextTareas = useContext(tareaContext);
    const { addNuevaTareaAUnProyecto, updateTarea, tareaSeleccinada, cancelUpdateTarea } = contextTareas;

    const [formValues, handleInputChange, reset, setValues] = useForm({ nombre: '' });

    useEffect(() => {

        if (tareaSeleccinada !== null) {
            setValues(tareaSeleccinada);
        } else {
            setValues({ nombre: '' });
        }

    }, [tareaSeleccinada, setValues]);

    
    if (!proyectoActivo) return null;

    const { nombre } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre.trim() === '') {
            return Swal.fire('error', 'Escribe una tarea', 'error');
        }

        if (tareaSeleccinada === null) {

            const tareaFormatoCompleto = {
                nombre: nombre,
                proyectoId: proyectoActivo._id
            }
            addNuevaTareaAUnProyecto(tareaFormatoCompleto);

        } else {
            
            updateTarea(formValues);
        }

        reset();
    }

    const handleCancelarUpdate = () => {
        cancelUpdateTarea();
    }
    return (

        <div className="formulario">
            <form onSubmit={handleSubmit}>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Escribe una tarea"
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value={(tareaSeleccinada) ? 'Editar tarea' : 'Agregar tarea'}

                    />
                    {   (tareaSeleccinada) &&
                        <input
                            onClick={handleCancelarUpdate}
                            type="button"
                            className="btn btn-eliminar btn-block"
                            value="Cancelar"
                        />
                    }

                </div>

            </form>

        </div>
    )
}
