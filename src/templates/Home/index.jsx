import styles from './home.module.css';
import logo_desenho from '../images/logo_desenho.png';
import logo_texto from '../images/logo_texto.png';
import background from '../images/img1.jpg';

export default function Home() {
  return (
    <>
      <div id={styles.background}>
        <div>
          <img src={logo_desenho} alt="Logo" className={styles.logo_desenho} />
          <img src={logo_texto} alt="Logo" className={styles.logo_texto} />
        </div>
        <div className={styles.box}>
          <div className={styles.left}>
            <h1 id={styles.left_box}>Pessoa</h1>
            <button className={styles.button}>Agendamento Online</button>
          </div>
          <div className={styles.right}>
            <h1 id={styles.right_box}>Escolas, grupos ou instituições</h1>
            <button className={styles.button}>Agendamento Online</button>
          </div>
        </div>
      </div>
    </>
  );
}
