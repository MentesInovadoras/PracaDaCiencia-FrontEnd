import './styles.css';
import logo_desenho from '../images/logo_desenho.png';
import logo_texto from '../images/logo_texto.png';
import background from '../images/img1.jpg';

export default function Home() {
    return (
        <>
            <div id="background">
                <div>
                    <img src={logo_desenho} alt="Logo" className="logo_desenho" />
                    <img src={logo_texto} alt="Logo" className="logo_texto" />
                </div>
                <div className="box">
                    <div className="left">
                        <h1 id="left_box">Pessoa</h1>
                        <h2 className="button">Agendamento Online</h2>
                    </div>
                    <div className="right">
                        <h1 id="right_box">Escolas, grupos ou instituições</h1>
                        <h2 className="button">Agendamento Online</h2>
                    </div>
                </div>
            </div>
        </>
    );
}