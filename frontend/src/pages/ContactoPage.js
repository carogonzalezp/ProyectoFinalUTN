import '../styles/ContactoPage.css';

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
        <div>
            <h2>Comunicate con nosotros</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>
                <p>
                 <label for="teléfono">Teléfono</label>
                 <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p>
                <input type="submit" value="Enviar"/>
                </p>

            </form>
        </div>
        <div className="datos">
            <h2>También podés contactarnos por los siguientes medios</h2>
            <ul>
                <li><img src="img/contacto/fotow.png" alt="whats"/> Celular: 3564576271</li>
                <li><img src="img/contacto/fotom.png" alt="mail"/> Mail: vighiyasociados@gmail.com</li>
                <li><img src="img/contacto/fotofb.png" alt="face"/> Facebook: Vighi y Asociados</li>
                <li><img src="img/contacto/FotoI.png" alt="insta"/> Instagram: vighi_y_asociados</li>
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