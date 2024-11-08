import React, { useState } from 'react';
import './ADMbase.css';
import Logo from "../images/logo_full.png";
import Diario from '../ADMdiario/index.jsx';
import Semanal from '../ADMsemanal/index.jsx';
import Mensal from '../ADMmensal/index.jsx';

export default function Adm() {
    const [activeComponent, setActiveComponent] = useState('Diario');

    return (
        <>
            <div className='bodyADM'>
                <aside className="sidebar">
                    <div className="logo">
                        <img src={Logo} alt="Ícone" />
                    </div>
                    <div className="menu">
                        <button onClick={() => setActiveComponent('Diario')}>Diário</button>
                        <button onClick={() => setActiveComponent('Semanal')}>Semanal</button>
                        <button onClick={() => setActiveComponent('Mensal')}>Mensal</button>
                    </div>
                </aside>
                {activeComponent === 'Diario' && <Diario />}
                {activeComponent === 'Semanal' && <Semanal />}
                {activeComponent === 'Mensal' && <Mensal />}
            </div>
        </>
    );
}
