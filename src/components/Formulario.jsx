import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Formulario = ({ agregarColaborador, mostrarAlerta }) => {
    const [colaborador, setColaborador] = useState({
        id: '',
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: ''
    });

    const manejarCambio = e => {
        setColaborador({
            ...colaborador,
            [e.target.name]: e.target.value
        });
    };

    const manejarSubmit = e => {
        e.preventDefault();
        if (Object.values(colaborador).some(value => value === '')) {
            mostrarAlerta('Todos los campos son obligatorios', 'danger');
        } else {
            agregarColaborador(colaborador);
            mostrarAlerta('Colaborador agregado exitosamente', 'success');
            setColaborador({ id: '', nombre: '', correo: '', edad: '', cargo: '', telefono: '' });
        }
    };

    return (
        <Form onSubmit={manejarSubmit}>
            <Form.Group controlId="formId">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" name="id" value={colaborador.id} onChange={manejarCambio} />
            </Form.Group>
            <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="nombre" value={colaborador.nombre} onChange={manejarCambio} />
            </Form.Group>
            <Form.Group controlId="formCorreo">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" name="correo" value={colaborador.correo} onChange={manejarCambio} />
            </Form.Group>
            <Form.Group controlId="formEdad">
                <Form.Label>Edad</Form.Label>
                <Form.Control type="text" name="edad" value={colaborador.edad} onChange={manejarCambio} />
            </Form.Group>
            <Form.Group controlId="formCargo">
                <Form.Label>Cargo</Form.Label>
                <Form.Control type="text" name="cargo" value={colaborador.cargo} onChange={manejarCambio} />
            </Form.Group>
            <Form.Group controlId="formTelefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="text" name="telefono" value={colaborador.telefono} onChange={manejarCambio} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Agregar Colaborador
            </Button>
        </Form>
    );
};

export default Formulario;