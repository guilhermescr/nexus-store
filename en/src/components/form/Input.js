import styles from './Input.module.css';

function Input({ type, text, name, dataType, placeholder, handleOnChange }) {
  return (
    <div className={styles.form_input_container}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        className={dataType}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        accept="image/*"
        autoComplete="off"
        required={(name === 'productName' || name === 'inCash_price' || name === 'imgSrc') ? 'required' : false}
      />
    </div>
  );
}

export default Input;
