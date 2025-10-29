import React, { useState } from "react";
import "./register.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

interface FormData {
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  tipoDocumento: string;
  numeroDocumento: string;
  telefono: string;
  ciudad: string;
  direccion: string;
  correo: string;
  contrasena: string;
  aceptoTerminos: boolean;
}

const initialData: FormData = {
  nombre: "",
  apellido: "",
  fechaNacimiento: "",
  tipoDocumento: "",
  numeroDocumento: "",
  telefono: "",
  ciudad: "",
  direccion: "",
  correo: "",
  contrasena: "",
  aceptoTerminos: false,
};

export default function Register(): JSX.Element {
  const [form, setForm] = useState<FormData>(initialData);

  function handleChange<K extends keyof FormData>(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // validar / enviar
    console.log("Enviar datos:", form);
  }

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <h2>CREAR CUENTA</h2>

        <input
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          type="text"
          placeholder="NOMBRE"
          required
        />

        <input
          name="apellido"
          value={form.apellido}
          onChange={handleChange}
          type="text"
          placeholder="APELLIDO"
          required
        />

        <input
          name="fechaNacimiento"
          value={form.fechaNacimiento}
          onChange={handleChange}
          type="date"
          placeholder="FECHA DE NACIMIENTO"
          required
        />

        <div style={{ display: "flex", gap: 5 }}>
          <select
            name="tipoDocumento"
            value={form.tipoDocumento}
            onChange={handleChange}
            required
          >
            <option value="">TIPO</option>
            <option value="CC">Cédula</option>
            <option value="TI">Tarjeta de Identidad</option>
            <option value="PP">Pasaporte</option>
          </select>

          <input
            name="numeroDocumento"
            value={form.numeroDocumento}
            onChange={handleChange}
            type="text"
            placeholder="N° DOCUMENTO"
            required
          />
        </div>

        <input
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
          type="tel"
          placeholder="TELÉFONO MÓVIL"
          required
        />

        <select name="ciudad" value={form.ciudad} onChange={handleChange} required>
          <option value="">CIUDAD</option>
          <option value="Bogotá">Bogotá</option>
          <option value="Medellín">Medellín</option>
          <option value="Cali">Cali</option>
        </select>

        <input
          name="direccion"
          value={form.direccion}
          onChange={handleChange}
          type="text"
          placeholder="DIRECCIÓN"
          required
        />

        <input
          name="correo"
          value={form.correo}
          onChange={handleChange}
          type="email"
          placeholder="CORREO ELECTRÓNICO"
          required
        />

        <input
          name="contrasena"
          value={form.contrasena}
          onChange={handleChange}
          type="password"
          placeholder="CONTRASEÑA"
          required
        />

        <div className="terms">
          <label htmlFor="acepto">
            <input
              id="acepto"
              name="aceptoTerminos"
              type="checkbox"
              checked={form.aceptoTerminos}
              onChange={handleChange}
              required
            />
            <span>
              Al seleccionar esta casilla acepto los{" "}
              <a href="#">términos y condiciones</a> y{" "}
              <a href="#">políticas de tratamiento de datos</a>.
            </span>
          </label>
        </div>

        <button type="submit" className="pr">
          ¡Inscríbete ya!
        </button>
      </form>

      <Footer />
    </div>
  );
}