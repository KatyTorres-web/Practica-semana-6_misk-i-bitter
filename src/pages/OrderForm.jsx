import { useState } from "react";

function OrderForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    producto: "",
    cantidad: 1,
    mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Pedido enviado:", formData);

    setSubmitted(true);
  };

  return (
    <section>
      <div className="form-header">
        <span className="section-label">Misk'i & Bitter</span>

        <h1>Realiza tu pedido</h1>

        <p>Completa tus datos y cuéntanos qué deseas disfrutar.</p>
      </div>

      <form className="order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo</label>

          <input
            id="nombre"
            name="nombre"
            type="text"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej. Katherine Torres"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo electrónico</label>

          <input
            id="correo"
            name="correo"
            type="email"
            value={formData.correo}
            onChange={handleChange}
            placeholder="correo@ejemplo.com"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="producto">Producto</label>

            <select
              id="producto"
              name="producto"
              value={formData.producto}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona un producto</option>

              <option value="Café">Café</option>

              <option value="Postre">Postre</option>

              <option value="Pastelería">Pastelería</option>

              <option value="Bebida">Bebida</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="cantidad">Cantidad</label>

            <input
              id="cantidad"
              name="cantidad"
              type="number"
              min="1"
              value={formData.cantidad}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje adicional</label>

          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="¿Deseas agregar alguna indicación?"
            rows="5"
          />
        </div>

        <button type="submit" className="submit-button">
          Enviar pedido
        </button>
      </form>

      {submitted && (
        <div className="success-message">
          <strong>¡Pedido registrado! ☕</strong>

          <p>Gracias, {formData.nombre}. Hemos recibido tu solicitud.</p>
        </div>
      )}
    </section>
  );
}

export default OrderForm;
