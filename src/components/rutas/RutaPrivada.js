import { useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { registroContext } from '../../context/auth/registroContext';

export const RutaPrivada = ({children}) => {

    const context = useContext(registroContext);

    const { autenticado, usuarioAutenticado } = context;

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            usuarioAutenticado(token);
        }
    }, [token]);

    return autenticado ? children : <Navigate to="/"/>
}
