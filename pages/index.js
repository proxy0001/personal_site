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

  const pageData = {
    title: "proxy0001",
    description: "How to be an artist? My latest occupation was software planner and front-end engineer for a total of 7 years. Earlier I studied animation and post-production, but at that time, I never thought of myself as an artist. After years of doing nothing in this field, I'm back to draw with a feeling that I'm an artist.",
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>{pageData.title}</title>
        <meta name="description" content={pageData.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Menu/>

        <h1 className={styles.title}>
          {pageData.title}
        </h1>

        <p className={styles.description}>
          {pageData.description}
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
