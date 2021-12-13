import React, { useContext } from 'react';
import {registroContext} from '../../context/auth/registroContext';

export const NavBar = () => {

    const context = useContext(registroContext);
    const {usuario, logOut} = context;

    const handleLogOut = () => {
        logOut();
    }
    return (
        <header className="app-header">
            {
                (usuario) && <p className="nombre-usuario">Hola, <span>{usuario.nombre}</span></p>
            }

            <nav className="nav-principal">
                <button
                className="btn btn-blank btn-logout"
                onClick={handleLogOut}
                >Cerrar sesion</button>
            </nav>
        </header>
    )
}
