import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {Proyectos} from '../proyectos/Proyectos';

export const DashboardRutas = () => {

    return (
        <Routes>
            <Route path="proyectos" element={<Proyectos />} />
        </Routes>
    );
}
