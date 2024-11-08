import './ADMbase.css'
import Logo from "../images/logo_full.png"
import Diario from '../ADMdiario/index.jsx'
import Semanal from '../ADMsemanal/index.jsx'
import Mensal from '../ADMmensal/index.jsx'


export default function adm () {
    return (
    
<>
<div className='bodyADM'>

    <aside className="sidebar">
        <div className="logo">
            <img src={Logo} alt="Ícone" />
        </div>
        <div className="menu">
            <button>Diário</button>
            <button>Semanal</button>
            <button>Mensal</button>
        </div>
    </aside>
        {/* <Diario/> */}
        {/* <Semanal/> */}
        <Mensal/>
   
</div>   
</>

)
}