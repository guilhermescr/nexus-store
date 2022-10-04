import styles from './Footer.module.css';

import AmericanExpress from '../../img/payment_options/american_express.jpg';
import ApplePay from '../../img/payment_options/apple_pay.png';
import Mastercard from '../../img/payment_options/mastercard.png';
import Paypal from '../../img/payment_options/paypal.png';
import Pix from '../../img/payment_options/pix.png';
import Visa from '../../img/payment_options/visa.jpg';
import AppleStore from '../../img/download_icons/applestore.svg';
import PlayStore from '../../img/download_icons/playstore.svg';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { FiClock, FiMail } from 'react-icons/fi';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact_info_container}>
        <div className={styles.working_days}>
          <h3>Our team is ready to help you!</h3>
          <p>
            <span className={styles.footer_icon}>
              <FiClock />
            </span> Sunday to Friday - 8am to 10pm
          </p>
        </div>

        <div className={styles.contact_options}>
          <p>
            <span className={styles.footer_icon}>
              <BsFillTelephoneFill />
            </span> +55 11 35555112
          </p>
          <p>
            <span className={styles.footer_icon}>
              <FiMail />
            </span> sac@nexustore.com.br
          </p>
        </div>
      </div>

      <section className={styles.payment_options_container}>
        <h3>Payment</h3>
        <ul className={styles.payment_options}>
          <li key="1" className={styles.payment_option}>
            <img src={AmericanExpress} alt="American Express Payment Option" />
          </li>
          <li key="2" className={styles.payment_option}>
            <img src={ApplePay} alt="Apple Pay Payment Option" />
          </li>
          <li key="3" className={styles.payment_option}>
            <img src={Mastercard} alt="Master Card Payment Option" />
          </li>
          <li key="4" className={styles.payment_option}>
            <img src={Paypal} alt="Paypal Payment Option" />
          </li>
          <li key="5" className={styles.payment_option}>
            <img src={Pix} alt="Pix Payment Option" />
          </li>
          <li key="6" className={styles.payment_option}>
            <img src={Visa} alt="Visa Payment Option" />
          </li>
        </ul>
      </section>

      <div className={styles.newsletter_container}>
        <h3>Newsletter</h3>
        <p>Receive special offers in your e-mail!</p>
        <input type="email" id="email" placeholder='Insert your e-mail here...' />
      </div>

      <div className={styles.download_our_apps_container}>
        <img src={PlayStore} alt="Download our app on Google Play Store" />
        <img src={AppleStore} alt="Download our app on App Store" />
      </div>
    </footer>
  );
}

export default Footer;
