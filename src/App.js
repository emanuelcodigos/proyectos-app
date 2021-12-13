import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Login } from './components/auth/Login';
import { NuevaCuenta } from './components/auth/NuevaCuenta';
import { RutaPrivada } from './components/rutas/RutaPrivada';
import { RegistroState } from './context/auth/RegistroState';
import { ProyectoState } from './context/proyectos/ProyectoState';
import { TareaState } from './context/tareas/TareaState';
import { DashboardRutas } from './components/rutas/DashboardRutas';


function App() {

    return (
        <ProyectoState>
            <TareaState>
                <RegistroState>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="registro" element={<NuevaCuenta />} />

                            <Route path="/*" element={
                                <RutaPrivada>
                                    <DashboardRutas/>
                                </RutaPrivada>
                            }/>
                        </Routes>

                    </Router>
                </RegistroState>
            </TareaState>
        </ProyectoState>
    );

}

export default App;
