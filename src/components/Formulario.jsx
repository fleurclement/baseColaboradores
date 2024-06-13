import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Formulario = ({ agregarColaborador, mostrarAlerta }) => {
  const [colaborador, setColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const manejarCambio = (e) => {
    setColaborador({ ...colaborador, id: (colaborador.length + 1).toString() });
    setColaborador({ ...colaborador, [e.target.name]: e.target.value });
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (Object.values(colaborador).some((value) => value === "")) {
      mostrarAlerta("Todos los campos son obligatorios", "danger");
    } else {
      agregarColaborador(colaborador);
      mostrarAlerta("Colaborador agregado exitosamente", "success");
      setColaborador({
        id: "",
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
    }
  };

  return (
    <div className="captura">
      <Form onSubmit={manejarSubmit}>
        <p>
          <h3>Ingresa Colaborador</h3>
        </p>

        <Form.Group controlId="formNombre">
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Indique Nombre"
            value={colaborador.nombre}
            onChange={manejarCambio}
          />
        </Form.Group>
        <Form.Group controlId="formCorreo">
          <Form.Control
            type="email"
            name="correo"
            placeholder="Correo Electronico"
            value={colaborador.correo}
            onChange={manejarCambio}
          />
        </Form.Group>
        <Form.Group controlId="formEdad">
          <Form.Control
            type="text"
            name="edad"
            placeholder="Edad"
            value={colaborador.edad}
            onChange={manejarCambio}
          />
        </Form.Group>
        <Form.Group controlId="formCargo">
          <Form.Control
            type="text"
            name="cargo"
            placeholder="Cargo"
            value={colaborador.cargo}
            onChange={manejarCambio}
          />
        </Form.Group>
        <Form.Group controlId="formTelefono">
          <Form.Control
            type="text"
            name="telefono"
            placeholder="Telefono"
            value={colaborador.telefono}
            onChange={manejarCambio}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar Colaborador
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
