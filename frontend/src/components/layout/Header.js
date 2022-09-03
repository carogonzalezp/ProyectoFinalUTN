import '../../styles/layout.css';

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <img src="img/logojusticia.jpg" width="100" alt="logojusticia" />
                <div className="titulo1">
                <h1>VIGHI & ASOCIADOS</h1>
                <p>ABOGADOS-CONSULTORES DE EMPRESAS</p>
                <div className="social">
                <a href="https://www.facebook.com/vighiyasociados"><img src="img/inicio/facebook.png" alt="facebook" /></a>
                <a href="https://www.instagram.com/vighi_y_asociados/"><img src="img/inicio/intagram.png" alt="instagram" /></a>
                <a href="mailto:vighiyasociados@gmail.com"><img src="img/inicio/mail.png" alt="mail" /></a>
                <a href="https://api.whatsapp.com/send?phone=543564576271&text="><img src="img/inicio/whatsapp.png" alt="whatsapp" /></a>
            </div>
            </div>
            </div>
                    
                </header >
                );
}
export default Header;