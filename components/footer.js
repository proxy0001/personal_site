
import styles from 'styles/Home.module.css';
import {FaTwitter, FaGithub} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {CusYuser, CusLenster, CusPhaver, CusObjkt, CusLens, CusLinkTree, CusFoundation} from 'components/icons';
import { useState, useEffect } from 'react';

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function Footer () {
  const size = useWindowSize();
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <a href="https://objkt.com/profile/tz1Si3bTLjykkQGD7Mc35VB94hoXFdVDPra9/" target="_blank" rel="noreferrer noopener">
          <CusObjkt className={styles.linkIcon} />
        </a>
        <a href="https://foundation.app/@proxy0001" target="_blank" rel="noreferrer noopener">
          <CusFoundation className={styles.linkIcon} />
        </a>
        {
          size.width > 600 ? 
          <span>
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
          </span> : null
        }
        <a href="https://linktr.ee/proxy0001" target="_blank" rel="noreferrer noopener">
          <CusLinkTree className={styles.linkIcon} />
        </a>
        <a href="https://twitter.com/proxy0001" target="_blank" rel="noreferrer noopener">
          <FaTwitter className={styles.linkIcon} />
        </a>
        <a href = "https://github.com/proxy0001" target="_blank" rel="noreferrer noopener">
          <FaGithub className={styles.linkIcon} />
        </a>
        <a href = "mailto:g.proxy0001@gmail.com">
          <MdEmail className={styles.linkIcon} />
        </a>
      </div>
    </footer>
  );
} 