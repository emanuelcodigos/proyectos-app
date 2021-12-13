import React, { useContext, useEffect } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
import { registroContext } from '../../context/auth/registroContext';
import { Spinner } from '../recursos/Spinner';


export const NuevaCuenta = (props) => {

    let navigate = useNavigate();
    const context = useContext(registroContext);
    const { loading, alerta, autenticado, mostrarAlerta, selLoading, startRegistraUsuario,resetearAlertAuth } = context;

    const [formValues, handleInputChange] = useForm(
        {
            email: 'ema@gmail.com', password: '123456789',
            password2: '', nombre: ''
        }
    );
    const { email, password, password2, nombre } = formValues;

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (nombre.trim() === '' || email.trim() === '' || password.trim() === '' || password2.trim() === '') {
            return mostrarAlerta('Todos los campos son obligatorios', 'error');
        }

        if (password.length < 6) {
            return mostrarAlerta('La contraseña debe tener al menos 6 caracteres', 'error');
        }

        if (password !== password2) {
            return mostrarAlerta('Las contraseña deben ser iguales', 'error');
        }

        selLoading();
        await startRegistraUsuario({nombre, email, password});
        selLoading();
        


    }

    useEffect(() => {
        if (alerta !== null) {
            Swal.fire(alerta.categoria.toUpperCase(), alerta.msg, alerta.categoria);
            resetearAlertAuth();
        }
    }, [alerta]);

    useEffect(() => {
        if(autenticado){
            navigate('/proyectos'); 
        }
    }, [autenticado, navigate]);


    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear Cuenta</h1>

                <form onSubmit={handleSubmit}>
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            value={nombre}
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            onChange={handleInputChange}
                        />
                    </div>
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
                            placeholder="contraseña"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="pass2">Contraseña</label>
                        <input
                            type="password"
                            value={password2}
                            id="pass2"
                            name="password2"
                            placeholder="Confirmar contraseña"
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
                                value="Registrarme"
                            />
                        </div>)
                    }
                </form>

                {
                    (!loading) &&
                    <Link to="/" className="enlace-cuenta">
                        <span>Iniciar sesion</span>
                    </Link>
                }
            </div>
        </div>
    )
}
