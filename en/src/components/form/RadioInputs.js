import { useState } from 'react';
import styles from './RadioInputs.module.css';

import Input from '../form/Input';

export let setImageTypeState;

function RadioInputs({ name, text, inputAmount, values, handleOnChange }) {
  const [imageType, setImageType] = useState('Image File');

  function createRadioInputs() {
    let inputs = [];

    for (let index = 0; index < inputAmount; index++) {
      let radioValue = values[index];

      let inputContainer = (
        <div className={styles.radio_input_container} key={index}>
          <input
            type="radio"
            id={radioValue}
            name={name}
            value={radioValue}
            defaultChecked={index === 0 ? true : false}
            onClick={changeImageType}
          />
          <label htmlFor={radioValue}>{radioValue}</label>
        </div>
      );

      inputs.push(inputContainer);
    }
    return inputs;
  }

  function changeImageType({ target }) {
    // target is the clicked input radio
    if (target.value) {
      setImageType(target.value);
    } else {
      setImageType(target);
    }
  }
  setImageTypeState = changeImageType;

  return (
    <div className={styles.form_radio_inputs_container}>
      <label id={styles.main_label} htmlFor={name}>
        {text}
      </label>
      <div className={styles.radio_inputs}>
        {createRadioInputs().map(input => input)}
      </div>
      <div className={styles.current_image_type_container}>
        {imageType === 'Image File' ? (
          <Input
            type="file"
            text="Select an image"
            id="imgSrc"
            name="imgFile"
            placeholder=""
            handleOnChange={handleOnChange}
          />
        ) : (
          <Input
            type="text"
            text="Link"
            id="imgSrc"
            name="imgLink"
            placeholder="Insert an image link here..."
            handleOnChange={handleOnChange}
          />
        )}
      </div>
    </div>
  );
}

export default RadioInputs;
