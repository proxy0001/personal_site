
import styles from 'styles/Home.module.css';
import {FaTwitter, FaGithub} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href = "mailto:g.proxy0001@gmail.com">
          <MdEmail className={styles.linkIcon} />
        </a>
        <a href="https://twitter.com/proxy0001" target="_blank" rel="noreferrer noopener">
          <FaTwitter className={styles.linkIcon} />
        </a>
        <a href = "https://github.com/proxy0001" target="_blank" rel="noreferrer noopener">
          <FaGithub className={styles.linkIcon} />
        </a>
      </div>
    </footer>
  );
} 