import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {FaTwitter} from 'react-icons/fa';
import Footer from 'components/footer';
import Menu from 'components/menu';
import { allSeries } from 'store/series';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const handleClick = (href) => {
    return (e) => {
      e.preventDefault()
      router.push(href)
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>proxy0001</title>
        <meta name="description" content="personal site of proxy0001" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Menu/>

        <h1 className={styles.title}>
          proxy0001
        </h1>

        <p className={styles.description}>
          How to be an artist? My latest occupation was a software planner and front-end engineer for a total of 7 years, 4 years at a startup working on data analytics products, and 3 years at an advertising agency. I haven&apos;t painted for many years, althought I have studied animation and post-production before, but at that time, I never thought of myself as an artist.
        </p>

        <div className={styles.gallery}>
          {
            allSeries.map((x, i) =>
              <div className={styles.galleryItem} key={i}
                onClick={handleClick(x.link)}
              >
                <h3 className={styles.title} style={{color: x.representColor}}>{x.title}</h3>
                <p className={styles.galleryItemDescription}>{x.description}</p>
                <img
                  className={styles.coverImg}
                  src={x.cover.src}
                  alt={x.cover.alt}
                />
              </div>
            )
          }
        </div>
      </main>
      <Footer/>
    </div>
  )
}
