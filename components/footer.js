
import styles from 'styles/Home.module.css';
import {FaTwitter, FaGithub} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {CusYuser, CusLenster, CusPhaver, CusObjkt, CusLens, CusLinkTree, CusFoundation} from 'components/icons';

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <a href="https://objkt.com/profile/tz1Si3bTLjykkQGD7Mc35VB94hoXFdVDPra9/" target="_blank" rel="noreferrer noopener">
        <CusObjkt className={styles.linkIcon} />
      </a>
      <a href="https://foundation.app/@proxy0001" target="_blank" rel="noreferrer noopener">
        <CusFoundation className={styles.linkIcon} />
      </a>
      <a href="https://yuser.co/proxy0001" target="_blank" rel="noreferrer noopener">
        <CusYuser className={styles.linkIcon} />
      </a>
      <a href="https://phaver.app.link/proxy0001" target="_blank" rel="noreferrer noopener">
        <CusPhaver className={styles.linkIcon} />
      </a>
      <a href="https://lenster.xyz/u/proxy0001.lens" target="_blank" rel="noreferrer noopener">
        <CusLenster className={styles.linkIcon} />
      </a>
      <a href="https://www.lensfrens.xyz/proxy0001.lens" target="_blank" rel="noreferrer noopener">
        <CusLens className={styles.linkIcon} />
      </a>
      <a href="https://twitter.com/proxy0001" target="_blank" rel="noreferrer noopener">
        <FaTwitter className={styles.linkIcon} />
      </a>
      <a href="https://linktr.ee/proxy0001" target="_blank" rel="noreferrer noopener">
        <CusLinkTree className={styles.linkIcon} />
      </a>
      <a href = "https://github.com/proxy0001" target="_blank" rel="noreferrer noopener">
        <FaGithub className={styles.linkIcon} />
      </a>
      <a href = "mailto:g.proxy0001@gmail.com">
        <MdEmail className={styles.linkIcon} />
      </a>
    </footer>
  );
} 