import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import React, { useState } from 'react';
import Search from '../components/search';

// function kelvinToF(kelvin) {
//   return (kelvin − 273.15) * 9/5 + 32
// }
// function kelvinToC(kelvin) {
//   return (kelvin − 273.15)
// }

export default function Home() {
  const APIkey = 'dd94c2216069276513043d32b0ae85ab';
  const city = 'Atlanta';

  let weather = {};
  let [info, setInfo] = useState({});

  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`)
  .then((response) =>{
    weather = response.data;
    setInfo(weather);
    console.log(weather);
  })
  .catch(error => {
    console.log(`Error: ${error}`);
  });

  // handleChange() = {
  //
  // }

  return (
    <div className={styles.container}>
      <Head>
        <title>Weather Stone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Weather Rock.
        </h1>
        <Search/>

        <div className={styles.grid}>
          <h1 >{ JSON.stringify(info) || "none" }</h1>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
