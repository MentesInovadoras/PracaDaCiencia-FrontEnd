import styles from './loading.module.css';
import Logo from "../images/logo_full.png";

export default function Loading() {
    return (
        <div className={styles.container}>
            <div className={styles.logoLoading}>
                <img src={Logo} alt="Ícone" className={styles.animatedLogo} />
            </div>
        </div>
    );
}
