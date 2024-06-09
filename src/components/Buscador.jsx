import React from 'react';
import { Form } from 'react-bootstrap';

const Buscador = ({ setBusqueda }) => {
    return (
        <Form>
            <Form.Group controlId="formBuscar">
                <Form.Label>Buscar Colaborador</Form.Label>
                <Form.Control type="text" onChange={(e) => setBusqueda(e.target.value)} />
            </Form.Group>
        </Form>
    );
};

export default Buscador;