import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import styles from './LinkButton.module.css';

function LinkButton({ to, text }) {
  return (
    <Link className={styles.btn} to={to}>
      {text} {text.includes("Add") && (
        <AiOutlinePlus />
      )}
    </Link>
  );
}

export default LinkButton;
