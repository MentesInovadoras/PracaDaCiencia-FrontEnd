import './ADMdiario.css'




export default function diario(){
    return(
<>
<main className='content'>
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
</>
);
}