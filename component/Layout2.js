import Head from "next/head";
import styles from '../styles/Layout.module.css'
import Layout from '../pages/index'

export default function Layout2() {
    return (
        <div>
            <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, intial-scale=1" />
  <title>Custom Coding</title>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css" />
  <style dangerouslySetInnerHTML={{__html: "<% include ./styles.css %>\n         \n     " }} />
  <header>
    <h2 href="#"> Mountain Travel</h2>
    <nav className={styles.nav}>
      <li><a className={styles.a} href="#">Main</a> </li> 
      <li><a className={styles.a} href="#">404</a> </li>
      <li><a className={styles.a} href="#">Contact</a> </li>
    </nav>
  </header>
  <section className="hero">
    <div className="background-image" style={{backgroundImage: 'url(https://wallpaper-house.com/data/out/7/wallpaper2you_139824.jpg)'}} />
    <div className="hero-content-area">
      <h1>Mountain Travel</h1>
      <h3> Unmissable Adventure Tours Around the World</h3>
      <a className={styles.a} href="#" className="btn">Contact Us</a>
    </div>
  </section>
  <section className="destinations">
    <h3 className="title">Rest information will go here:</h3>
    <p>blah blash blahs blahs blahss</p>
    <hr />
  </section>
  <section className="contact">
    <h3 className="title">Join our newsletter</h3>	
    <p>Information will go here(if any)</p>
    <hr />
    <form>
      <input type="email" placeholder="Email" />
      <a className={styles.a} href="#" className="btn">Subscribe now</a>
    </form>
  </section>
  <footer>
    <ul className={styles.ul}>
      <li><a className={styles.a} href="#"><i className="fa fa-twitter-square" /></a></li>
      <li><a className={styles.a} href="#"><i className="fa fa-facebook-square" /></a></li>
      <li><a className={styles.a} href="#"><i className="fa fa-snapchat-square" /></a></li>
      <li><a className={styles.a} href="#"><i className="fa fa-pinterest-square" /></a></li>
      <li><a className={styles.a} href="#"><i className="fa fa-github-square" /></a></li>
    </ul>
    <p>Made by Pardeep Singh</p>
    <p>No attribution required. you can remove this footer.</p>
  </footer>
</>

        </div>
    )
}
