import React from 'react'
import { ListaProyectos } from '../proyectos/ListaProyectos'
import { FormularioNewProyect } from './FormularioNewProyect'

export const SideBar = () => {
    return (
        <aside>
            <h1>MERN <span>Proyectos</span></h1>

            <FormularioNewProyect/>

            <div className="proyectos">
                <h2>Tus proyectos</h2>
                <ListaProyectos/>
            </div>


        </aside>
    )
}
