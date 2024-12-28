import styles from "./OwnerPage.module.css"
import bitcoinLogo from "../../images/bitcoin-logo.png";
import { Link  } from 'react-router-dom';

export const OwnerPage = () => {
  return (
    <>
      <a className={styles.logo}>
      {/* <Logo/> */}
      <img src={bitcoinLogo}/>
        {/* <span>bitcoin-organization-builder</span> */}
        </a>
      <div className={styles.page}>
        <aside className={styles.pageAside}>
          <ul className={styles.menu}>
            <li>
              <svg>
                <use href=""></use>
              </svg>
              <Link to="/organization">Organization</Link>
            </li>
            <li>
              <svg>
                <use href=""></use>
              </svg>
              <Link to="/treasures">Treasures</Link>
            </li>
            <li>
              <svg>
                <use href=""></use>
              </svg>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <svg>
                <use href=""></use>
              </svg>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <svg>
                <use href=""></use>
              </svg>
              <Link to="/office">Office</Link>
            </li>
            <li>
              <svg>
                <use href=""></use>
              </svg>
              <Link to="/help">Help center</Link>
            </li>
          </ul>
        </aside>
        <main className={styles.pageMain}>
          <form className={styles.form}>
            <ul className={styles.formList}>
              <li className={styles.formItem}>
                <label className={styles.formLabel}>Organization name</label>
                <input className={styles.formInput} placeholder="ex.: Starwee Gmbh" />
              </li>
              <li className={styles.formItem}>
                <label className={styles.formLabel}>
                  Main owner <span className={styles.formBtcLabel}>bitcoin btc address</span>
                </label>
                <input className={styles.formInput}  placeholder="" />

                <input className={styles.formInput}  placeholder="Name/Tag *(optional)" />
              </li>
            </ul>
            <button className={styles.formBtnOwner}>+ owner</button>
            <button className={styles.formBtnNext}>Next</button>
          </form>
        </main>
      </div>
    </>
  )
}
