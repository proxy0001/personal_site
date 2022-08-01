
import Image from "next/image";
import Head from 'next/head';
import styles from 'styles/Home.module.css';
import SeriesHead from 'components/series-head';
import Footer from 'components/footer';
import Menu from 'components/menu';

export default function LayoutSeriesPage (props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta property="og:title" content={props.title} />
        <meta property="og:image" content={props.url + props.pieces[0].src} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url"  content={props.url} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${styles.seriesPage}`}>
        <Menu/>

        <div className={styles.title} style={{color: props.representColor}}>
          {props.icon}
        </div>
        <h1 className={styles.title} style={{color: props.representColor}}>
          {props.title}
        </h1>

        <p className={styles.description}>
          {props.description}
        </p>

        <div className={styles.series}>
          <SeriesHead {...props} />
          {props.pieces.map((x, i) =>
            <div className={styles.piece} key={i}>
              <h3>{x.title}</h3>
              <div
                className={styles.pieceImg}
                style={{width: x.width < x.height ? (x.width / x.height) * 100 + '%' : null}}
              >
                <Image
                  src={x.src}
                  alt={x.alt}
                  width={x.width}
                  height={x.height}
                  layout="responsive"
                  objectFit="contain"
                  priority={i < 4 ? true : false}
                  unoptimized={true}
                />
              </div>
              <div
                className={styles.pieceFoot}
              >{`${x.specification}, ${x.createDate}`}</div>
            </div>
          )}
        </div>
      </main>

      <Footer/>
    </div>
  );
} 