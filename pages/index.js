import Image from "next/image";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from 'components/footer';
import Menu from 'components/menu';
import { env, me as pageData } from 'store/state';
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
        <meta property="og:title" content={pageData.title} />
        <meta property="og:image" content={env.url + pageData.gallery[0].cover.src} />
        <meta property="og:description" content={pageData.description} />
        <meta property="og:url"  content={env.url} />
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
                <div className={styles.coverImg} style={{width: x.cover.width < x.cover.height ? (x.cover.width / x.cover.height) * 100 + '%' : null}}>
                  <Image
                    src={x.cover.src}
                    alt={x.cover.alt}
                    width={x.cover.width}
                    height={x.cover.height}
                    layout="responsive"
                    objectFit="contain"
                    priority={i < 4 ? true : false}
                  />
                </div>
              </div>
            )
          }
        </div>
      </main>
      <Footer/>
    </div>
  )
}
