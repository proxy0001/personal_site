import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {FaTwitter} from 'react-icons/fa'
import {VscMenu} from 'react-icons/vsc'

export default function Home() {
  let pieces = [
    {
      title: "Play on the Swing",
      src: "/img/in_the_room/In_the_Room-Play_on_the_Swing_1080P.jpg",
      alt: "In the Room - Play on the Swing",
      createDate: "2022-06-28",
    },
    {
      title: "Project Me",
      src: "/img/in_the_room/In_the_Room-Project_Me_1080P.jpg",
      alt: "In the Room - Project Me",
      createDate: "2022-06-24",
    },
    {
      title: "Want out",
      src: "/img/in_the_room/In_the_Room-Want_out_1080P.jpg",
      alt: "In the Room - Want out",
      createDate: "2022-06-23",
    },
    {
      title: "Looks Like I Have a Son",
      src: "/img/in_the_room/In_the_Room-Looks_Like_I_Have_a_Son_1080P.jpg",
      alt: "In the Room - Looks Like I Have a Son",
      createDate: "2022-06-18",
    },
    {
      title: "Swimming ?",
      src: "/img/in_the_room/In_the_Room-Swimming_1080P.jpg",
      alt: "In the Room - Swimming ?",
      createDate: "2022-06-15",
    },
    {
      title: "Dancing with Room",
      src: "/img/in_the_room/In_the_Room-Dancing_with_Room_1080P.jpg",
      alt: "In the Room - Dancing with Rooms",
      createDate: "2022-06-14",
    },
    {
      title: "Watching TV",
      src: "/img/in_the_room/In_the_Room-Watching_TV_1080P.jpg",
      alt: "In the Room - Watching TV",
      createDate: "2022-06-11",
    },
    {
      title: "Blowing Bubbles",
      src: "/img/in_the_room/In_the_Room-Blowing_Bubbles_1080P.jpg",
      alt: "In the Room - Blowing Bubbles",
      createDate: "2022-06-07",
    },
    {
      title: "Me",
      src: "/img/in_the_room/In_the_Room-Me_1080P.jpg",
      alt: "In the Room - Me",
      createDate: "2022-05-19",
    },
  ]
  return (
    <div className={styles.container}>
      <Head>
        <title>proxy0001</title>
        <meta name="description" content="personal site of proxy0001" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.menu}>
        <VscMenu className={styles.linkIcon} />
        </div>

        <h1 className={styles.title}>
          proxy0001
        </h1>

        <p className={styles.description}>
        How to be an artist? My latest occupation was a software planner and front-end engineer for a total of 7 years, 4 years at a startup working on data analytics products, and 3 years at an advertising agency. I haven't painted for many years, althought I have studied animation and post-production before, but at that time, I never thought of myself as an artist.
        </p>

        <div className={styles.series}>
          <div className={styles.seriesHead}>
            <h2>In the Room</h2>
          </div>
          {pieces.map((x, i) =>
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

      <footer className={styles.footer}>
        <div className={styles.links}>
          <a href="https://twitter.com/proxy0001" target="_blank" rel="noreferrer">
            <FaTwitter className={styles.linkIcon} />
          </a>
        </div>
      </footer>
    </div>
  )
}
