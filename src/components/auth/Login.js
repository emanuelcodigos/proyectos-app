import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


import { registroContext } from '../../context/auth/registroContext';
import { useForm } from '../../hooks/useForm';
import { Spinner } from '../recursos/Spinner';



export const Login = () => {

    const navigate = useNavigate();
    const context = useContext(registroContext);
    const { loading, alerta, autenticado, mostrarAlerta, selLoading, startLoginUsuario, resetearAlertAuth } = context;
    const [formValues, handleInputChange] = useForm({ email: '', password: '' });
    const { email, password } = formValues;


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email.trim() === '' || password.trim() === '') {
            return mostrarAlerta('Todos los campos son obligatorios', 'error');
        }

        selLoading();
        await startLoginUsuario({ email, password });
        selLoading();
    }

    useEffect(() => {

        if (alerta !== null) {
            Swal.fire(alerta.categoria.toUpperCase(), alerta.msg, alerta.categoria);
            resetearAlertAuth();
        }

    }, [alerta, resetearAlertAuth]);

    useEffect( () => {

        if(autenticado){
            navigate('/proyectos'); 
        }

    }, [autenticado, navigate]);

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Inicia Sesion</h1>

                <form onSubmit={handleSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            value={email}
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="pass">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            id="pass"
                            name="password"
                            placeholder="Tu contraseña"
                            onChange={handleInputChange}
                        />
                    </div>

                    {
                        (loading) ? <Spinner/>
                        :
                        
                        (<div className="campo-form">
                            <input
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Iniciar sesion"
                            />
                        </div>)
                    }
                </form>

                <Link to="/registro" className="enlace-cuenta">
                    No tenes cuenta? <span>Registrate aqui</span>
                </Link>

            </div>
        </div>
    )
}
