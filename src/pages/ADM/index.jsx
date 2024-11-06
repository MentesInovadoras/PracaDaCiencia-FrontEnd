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
        <div className='data'>
            <button id="prevDay">&lt;</button>
            <h1 className='ADM_selected_day'>Dia atual</h1>
            <button id="nextDay">&gt;</button>
        </div>
        <div className='cardADM'>
            <h1>card1</h1>
            <h1>card2</h1>
            <h1>card3</h1>
            <h1>card4</h1>
        </div>
    </main>

</div>   
</>

)
}