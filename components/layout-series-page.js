
import React from 'react';
import Image from "next/image";
import Head from 'next/head';
import styles from 'styles/Home.module.css';
import SeriesHead from 'components/series-head';
import Footer from 'components/footer';
import Menu from 'components/menu';
import {MdClose} from 'react-icons/md';

export default class LayoutSeriesPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isPop: false,
      popImgProps: null,
      zoomIn: false,
    };
  }

  switchPopImg = (popImgProps) => {
    let isPop = !this.state.isPop
    popImgProps = isPop ? popImgProps : null
    this.setState({isPop});
    this.setState({popImgProps});
    this.setState({zoomIn: false});
    this.switchBodyOverflow(isPop);
  }

  switchZoomIn = () => {
    let zoomIn = !this.state.zoomIn
    this.setState({zoomIn});
  }

  
  switchBodyOverflow = (isPop) => {
    if(isPop){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  componentWillUnmount() {
    document.body.style.overflow = 'unset';
}

  render () {
    return (
      <div className={styles.container}>
        <Head>
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description} />
          <meta property="og:title" content={this.props.title} />
          <meta property="og:image" content={this.props.url + this.props.pieces[0].src} />
          <meta property="og:description" content={this.props.description} />
          <meta property="og:url"  content={this.props.url} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={`${styles.main} ${styles.seriesPage}`}>
          <Menu/>
  
          <div className={styles.title} style={{color: this.props.representColor}}>
            {this.props.icon}
          </div>
          <h1 className={styles.title} style={{color: this.props.representColor}}>
            {this.props.title}
          </h1>
  
          <p className={styles.description}>
            {this.props.description}
          </p>
  
          <div className={styles.series}>
            <SeriesHead {...this.props} />
            {this.props.pieces.map((x, i) =>
              <div className={styles.piece} key={i}>
                <h3>{x.title}</h3>
                <div
                  className={styles.pieceImg}
                  style={{width: x.width < x.height ? (x.width / x.height) * 100 + '%' : null}}
                  onClick={e => this.switchPopImg(x)}
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
          {
            this.state.isPop ? 
              <div className={styles.popImg}>
                <Image
                  className={this.state.zoomIn ? styles.isZoomIn : null}
                  src={this.state.popImgProps.src}
                  alt={this.state.popImgProps.alt}
                  width={this.state.popImgProps.width}
                  height={this.state.popImgProps.height}
                  layout={this.state.zoomIn ? "intrinsic" : "fill"}
                  objectFit="contain"
                  unoptimized={true}
                  onClick={e => this.switchZoomIn()}
                />
                <div className={styles.menu}
                  onClick={e => this.switchPopImg()}
                >
                  <MdClose/>
                </div>
              </div>
            : null
          }
        </main>
  
        <Footer/>
      </div>
    );
  }
}