
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${styles.seriesPage}`}>
        <Menu/>

        <h1 className={styles.title} style={{color: props.representColor}}>
          {props.title}
        </h1>

        <p className={styles.description}
          // style={{color: props.representColor}}
        >
          {props.description}
        </p>

        <div className={styles.series}>
          <SeriesHead {...props} />
          {props.pieces.map((x, i) =>
            <div className={styles.piece} key={i}>
              <h3>{x.title}</h3>
              <img
                className={styles.pieceImg}
                src={x.src}
                alt={x.alt}
              />
              <div className={styles.pieceFoot}>{x.createDate}</div>
            </div>
          )}
        </div>
      </main>

      <Footer/>
    </div>
  );
} 