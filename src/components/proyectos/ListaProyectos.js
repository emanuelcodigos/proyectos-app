import React, { useEffect } from 'react';
import { useContext } from 'react';
import { proyectoContext } from '../../context/proyectos/proyectoContext';
import { Proyecto } from './Proyecto';

export const ListaProyectos = () => {


    const proyectosContext = useContext(proyectoContext);
    const {arrayProyectos, setArrayProyectos} = proyectosContext;

    useEffect(() => {
        setArrayProyectos();
    }, [setArrayProyectos]);

    if(arrayProyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

    
    return (
       <ul className="listado-proyectos">
           {
               arrayProyectos.map( proyecto => (

                <Proyecto
                key={proyecto._id}
                proyecto={proyecto}
                />
               ))
           }
       </ul>
    )
}
