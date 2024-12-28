import styles from "./LoginPage.module.css";
import bitcoinLogo from "../../images/bitcoin-logo.png";
import helpIcon from "../../images/help-icon.svg";
import { Link  } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <>
      <a className={styles.logo}>
        <img src={bitcoinLogo} />
      </a>
      <ul className={styles.loginList}>
        <li>
          <Link to="/owner" className={styles.link}>LN Login</Link>
        </li>
        <li>
          <Link to="/owner" className={styles.link}>Nostr connect</Link>
        </li>
        <li>
          <Link to="/owner" className={styles.link}>Demo</Link>
        </li>
      </ul>
      <a href="" className={styles.helpLink}>
        <img src={helpIcon} alt="" />
        <span>Help center</span>
      </a>
    </>
  )
}
