
import styles from 'styles/Home.module.css';
import {FaTwitter} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href = "mailto:g.proxy0001@gmail.com">
          <AiOutlineMail className={styles.linkIcon} />
        </a>
        <a href="https://twitter.com/proxy0001" target="_blank" rel="noreferrer">
          <FaTwitter className={styles.linkIcon} />
        </a>
      </div>
    </footer>
  );
} 