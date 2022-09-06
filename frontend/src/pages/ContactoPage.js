import '../styles/ContactoPage.css';
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinámica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
            axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }


    return (
        <main className="holder contacto">
            <div>
                <h2>Comunicate con nosotros</h2>
                <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="teléfono">Teléfono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p className="acciones"><input type="submit" value="Enviar" />
                    </p>

                </form>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
            </div>
            <div className="datos">
                <h2>También podés contactarnos por los siguientes medios</h2>
                <ul>
                    <li><img src="img/contacto/fotow.png" alt="whats" /> Celular: 3564576271</li>
                    <li><img src="img/contacto/fotom.png" alt="mail" /> Mail: vighiyasociados@gmail.com</li>
                    <li><img src="img/contacto/fotofb.png" alt="face" /> Facebook: Vighi y Asociados</li>
                    <li><img src="img/contacto/FotoI.png" alt="insta" /> Instagram: vighi_y_asociados</li>
                </ul>
            </div>
            <div className="horariosDeAtencion">
                <h2>Horarios de atención</h2>
                <ul>
                    <li>Lun: 8:00-20:00</li>
                    <li>Mar: 8:00-20:00</li>
                    <li>Mier: 8:00-20:00</li>
                    <li>Jue: 8:00-20:00</li>
                    <li>Vier: 8:00-20:00</li>
                    <li>Sab: 8:00-13:00</li>
                    <li>Dom: cerrado</li>
                </ul>
            </div>

        </main>
    );
}
export default ContactoPage;