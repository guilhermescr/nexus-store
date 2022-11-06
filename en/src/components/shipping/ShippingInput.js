import { useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiAlertCircle } from 'react-icons/fi';
import styles from './ShippingInput.module.css';

function ShippingInput() {
  const [zipCode, setZipCode] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  const alertMsg = useRef();
  const resultsContainer = useRef();
  const submitButton = useRef();
  const REGEX = new RegExp('^[0-9]+$');

  const fetchZipCode = async () => {
    const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
    return await response.json();
  };

  const searchZipCode = async () => {
    setIsSearching(true);

    const data = await fetchZipCode();

    if (!data.erro) {
      const zipCodeData = [
        data.cep,
        data.uf,
        data.localidade,
        data.bairro,
        data.logradouro,
        `$${Math.round(Math.random() * 80)}.99`
      ];

      setTimeout(() => {
        setIsSearching(false);
        setHasResults(true);

        document.querySelectorAll('.result').forEach((zipCodeInfo, index) => {
          zipCodeInfo.innerHTML = zipCodeData[index];
        });
      }, 800);
    } else {
      // Invalid Zip Code, ex.: 88888888
      setIsSearching(false);
      setZipCode('0');
      redAlert(true);
    }
  };

  function clearZipCodeInfo() {
    setHasResults(false);
    setZipCode('');
    resultsContainer.current.previousElementSibling.value = '';

    document.querySelectorAll('.result').forEach(zipCodeInfo => {
      zipCodeInfo.innerHTML = '';
    });
  }

  function redAlert(redAlertBoolean) {
    if (redAlertBoolean) {
      alertMsg.current.className = styles.alertColor;
    } else {
      alertMsg.current.className = '';
    }
  }

  function handleOnChange({ target }) {
    redAlert(false);
    setZipCode('');

    if (target.value.includes('-') || target.value.includes('.')) {
      target.value = target.value.replaceAll('-', '').replaceAll('.', '');
    }

    if (target.value.length > 8) {
      target.value = target.value.slice(0, 8);
    }

    if (REGEX.test(target.value)) {
      setZipCode(target.value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (submitButton.current.innerHTML === 'Clear Results') {
      clearZipCodeInfo();
      return;
    }

    if (REGEX.test(zipCode) && zipCode.length === 8) {
      searchZipCode();
    } else {
      redAlert(true);
    }
  }

  return (
    <form className={styles.shipping} onSubmit={event => handleSubmit(event)}>
      <label htmlFor="shippingPrice">
        {!hasResults ? 'Calculate the shipping' : 'Shipping'}:
      </label>
      {/* Our products come from 07183-490 (Jardim das Nações - Guarulhos, SP) */}

      <p className={hasResults ? styles.hide : ''} ref={alertMsg}>
        {!isSearching && zipCode !== '0' && (
          <>
            <FiAlertCircle /> Only numbers!
          </>
        )}
        {zipCode === '0' && (
          <>
            <FiAlertCircle /> This zip code is invalid!
          </>
        )}
        {isSearching && (
          <>
            <AiOutlineSearch /> Searching...
          </>
        )}
      </p>

      <input
        type="text"
        name="shippingPrice"
        className={hasResults ? styles.hide : ''}
        id="shippingPrice"
        onChange={event => handleOnChange(event)}
        placeholder="Insert a Zip Code..."
      />

      <div
        id={styles.results}
        ref={resultsContainer}
        className={!hasResults ? styles.hide : ''}
      >
        <h2>
          Zip Code: <span className="result"></span>
        </h2>
        <h2>
          UF: <span className="result"></span>
        </h2>
        <h2>
          City: <span className="result"></span>
        </h2>
        <h2>
          Street: <span className="result"></span>
        </h2>
        <h2>
          Road: <span className="result"></span>
        </h2>
        <h2>
          Shipping Price: <span className="result"></span>
        </h2>
      </div>

      {!hasResults ? (
        <button ref={submitButton} type="submit">
          Calculate Shipping
        </button>
      ) : (
        <button ref={submitButton} type="submit">
          Clear Results
        </button>
      )}
    </form>
  );
}

export default ShippingInput;
