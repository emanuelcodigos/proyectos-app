import React from 'react';
import { NavBar } from '../layout/NavBar';
import { SideBar } from '../layout/SideBar';
import { FormularioTarea } from '../tareas/FormularioTarea';
import { ListadoTareas } from '../tareas/ListadoTareas';

export const Proyectos = () => {

    return (
        <div className="contenedor-app">
            <SideBar/>

            <div className="seccion-principal">
                <NavBar/>
                <main>
                    <FormularioTarea/>
                    <div className="contenedor-tareas">
                        <ListadoTareas/>
                    </div>
                </main>
            </div>
        </div>
    )
}
