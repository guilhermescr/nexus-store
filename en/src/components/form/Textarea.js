import styles from './Textarea.module.css';

function Textarea({ name, text, placeholder, handleOnChange }) {
  return (
    <div className={styles.form_textarea_container}>
      <label htmlFor={name}>{text}</label>
      <textarea
        className={styles.textarea}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
      ></textarea>
    </div>
  );
}

export default Textarea;
