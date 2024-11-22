import './WeekCalendar.css';
// import Logo from '../../components/LogoSide.jsx';
import NumberTable from '../../components/NumberTable.jsx';
import AvailableTimes from '../../components/AvailableTimes.jsx';
import logo1 from '../images/logo_original.png';
import prefeitura_vitoria from '../images/prefeitura_vitoria.png';


function App() {

  return (
  <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title text-whidth="1px">Praça da Ciência</title>
  <link rel="stylesheet" href="styles/app.css" />
  <div id="weekBackground">
    <div id="week_page">
      <div id="logo_side">
        <img src={logo1} alt="Logo Da praça da Ciencia" id="logo"/>

      </div>
      <div id="week_side">
        <NumberTable/>
      </div>
      <div id="variable_hours">
        <AvailableTimes/>
      </div>
      <div id="vertical_line" />
    </div>
    <img
      src={prefeitura_vitoria}
      alt="Prefeitura de Vitória"
      id="vix_city_hall"
    />
  </div>
  </>

  );
}

export default App;