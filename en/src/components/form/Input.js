import styles from './Input.module.css';

function Input({ type, text, name, placeholder, handleOnChange }) {
  return (
    <div className={styles.form_input_container}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        accept={name === 'productImage' ? 'image/*' : ''}
      />
    </div>
  );
}

export default Input;
