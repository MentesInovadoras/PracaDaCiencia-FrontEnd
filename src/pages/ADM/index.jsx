import './styles.css'
import logo from "../images/logo_full.png"


export default function adm () {
    return (
    
<>
<div className='bodyADM'>

    <aside className="sidebar">
        <div className="logo">
            <img src={logo} alt="Ícone" />
        </div>
        <div className="menu">
            <button>Diário</button>
            <button>Semanal</button>
            <button>Mensal</button>
        </div>
    </aside>
    <main className="content">
        
    </main>

</div>   
</>

)
}