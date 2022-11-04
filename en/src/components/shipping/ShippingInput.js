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

    const zipCodeData = await fetchZipCode();

    if (!zipCodeData.erro) {
      const strictData = [
        zipCodeData.cep,
        zipCodeData.uf,
        zipCodeData.localidade,
        zipCodeData.bairro,
        zipCodeData.logradouro
      ];

      setTimeout(() => {
        setIsSearching(false);
        setHasResults(true);

        document.querySelectorAll('.result').forEach((zipCodeInfo, index) => {
          zipCodeInfo.innerHTML = strictData[index];
        });
      }, 800);
    } else {
      // Invalid Zip Code
    }
  };

  function clearZipCodeInfo() {
    setHasResults(false);
    resultsContainer.current.previousElementSibling.value = '';

    document.querySelectorAll('.result').forEach(zipCodeInfo => {
      zipCodeInfo.innerHTML = '';
    });
  }

  function handleOnChange({ target }) {
    alertMsg.current.className = '';
    setZipCode('');

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
      alertMsg.current.className = styles.alertColor;
    }
  }

  return (
    <form className={styles.shipping} onSubmit={event => handleSubmit(event)}>
      <label htmlFor="shippingPrice">Calculate the shipping:</label>

      <p className={hasResults ? styles.hide : ''} ref={alertMsg}>
        {!isSearching ? (
          <>
            <FiAlertCircle /> Only numbers!
          </>
        ) : (
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
        maxLength="8"
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
