import React, { useContext, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { proyectoContext } from '../../context/proyectos/proyectoContext';
import { Spinner } from '../recursos/Spinner';
import Swal from 'sweetalert2';

export const FormularioNewProyect = () => {

    const [state, setstate] = useState(false);
    const [formValues, handleInputChange, reset] = useForm({ nombre: ''});

    const { nombre } = formValues;

    const proyectosContext = useContext(proyectoContext);
    const { loading, setLoadingGlogal, addNuevoProyecto} = proyectosContext;

    
    const handleSubmit = async(e) => {

        e.preventDefault();
        if(nombre.trim() === ''){
            return Swal.fire('Error','Ingresa un nombre para el proyecto', 'error');
        }

        setLoadingGlogal(true);
        await addNuevoProyecto({nombre: nombre});
          
        setLoadingGlogal(false);
        reset();
        setstate(false);
    }
    return (
        <>
            {

                (loading) ? (<Spinner />)

                    :
                    (
                        <>
                            <button
                                type="button"
                                className="btn btn-block btn-primario"
                                onClick={() => setstate(true)}
                            >Nuevo proyecto</button>

                            {
                                (state) &&
                                <form onSubmit={handleSubmit} className="formulario-nuevo-proyecto">
                                    <input
                                        type="text"
                                        className="input-text"
                                        name="nombre"
                                        value={nombre}
                                        onChange={handleInputChange}
                                        placeholder="nombre del proyecto"
                                    />

                                    <input
                                        type="submit"
                                        value="agregar proyecto"
                                        className="btn btn-primario btn-block"
                                    />

                                </form>

                            }


                        </>
                    )
            }
        </>
    )
}
