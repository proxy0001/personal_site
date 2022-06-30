import Image from "next/image";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from 'components/footer';
import Menu from 'components/menu';
import { me as pageData } from 'store/series';
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
        <title>{pageData.title}</title>
        <meta name="description" content={pageData.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Menu/>

        <div className={styles.title} style={{color: pageData.representColor}}>
          {pageData.icon}
        </div>
        <h1 className={styles.title} style={{color: pageData.representColor}}>
          {pageData.title}
        </h1>

        <p className={styles.description} style={{color: pageData.representColor}}>
          {pageData.description}
        </p>

        <div className={styles.gallery}>
          {
            pageData.gallery.map((x, i) =>
              <div className={styles.galleryItem} key={i}
                onClick={handleClick(x.link)}
              >
                <h3 className={styles.title} style={{color: x.representColor}}>{x.title}</h3>
                <p className={styles.galleryItemDescription}>{x.description}</p>
                <Image
                  className={styles.coverImg}
                  src={x.cover.src}
                  alt={x.cover.alt}
                  width={x.cover.width}
                  height={x.cover.height}
                  priority={i < 4 ? true : false}
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
