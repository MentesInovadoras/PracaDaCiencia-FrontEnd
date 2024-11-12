import './loading.css';
import Logo from "../images/logo_full.png";

export default function Loading() {
    return (
        <div className="container">
            <div className="logoLoading">
                <img src={Logo} alt="Ícone" className='animatedLogo' />
            </div>
        </div>
    );
}
