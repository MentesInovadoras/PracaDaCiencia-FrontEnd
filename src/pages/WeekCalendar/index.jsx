import './styles.css';
import Logo from '../../components/LogoSide.js';
import NumberTable from '../../components/NumberTable.js';
import AvailableTimes from '../../components/AvailableTimes.js';

function App() {

  return (
  <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title text-whidth="1px">Praça da Ciência</title>
  {/* <link href="{% static 'WeekCalendarProps.css' %}" rel="stylesheet"/> */}
  <link rel="stylesheet" href="styles/app.css" />
  <div id="background">
    <div id="week_page">
      <div id="logo_side">
        <Logo />
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
      src="..\..\static/IMGs/Prefeitura_de_Vitória.png"
      alt="Prefeitura de Vitória"
      id="vix_city_hall"
    />
  </div>
  </>

  );
}

export default App;