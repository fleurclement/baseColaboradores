 // src/App.jsx
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BaseColaboradores } from './assets/BaseColaboradores';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';

const App = () => {
    const [colaboradores, setColaboradores] = useState(BaseColaboradores);
    const [busqueda, setBusqueda] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [tipoAlerta, setTipoAlerta] = useState('');

    const agregarColaborador = (colaborador) => {
        setColaboradores([...colaboradores, colaborador]);
    };

    const eliminarColaborador = (id) => {
        setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
    };

    const mostrarAlerta = (mensaje, tipo) => {
        setMensaje(mensaje);
        setTipoAlerta(tipo);
        setTimeout(() => {
            setMensaje('');
            setTipoAlerta('');
        }, 3000);
    };

    const colaboradoresFiltrados = colaboradores.filter(colaborador =>
        colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.cargo.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.telefono.includes(busqueda)
    );

    return (
        <Container>
            <h1>Gestión de Colaboradores</h1>
            <Buscador setBusqueda={setBusqueda} />
            <Listado colaboradores={colaboradoresFiltrados} eliminarColaborador={eliminarColaborador} />
            <Formulario agregarColaborador={agregarColaborador} mostrarAlerta={mostrarAlerta} />
            {mensaje && <Alert mensaje={mensaje} tipo={tipoAlerta} />}
        </Container>
    );
};

export default App;
