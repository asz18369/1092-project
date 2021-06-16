
import styles from '../styles/Layout2.module.css'


export default function Layout2() {
  return (
      <div>
          <nav className={styles.nav}>
  <div className={styles.container}>
      <input className={styles.input} id="responsive-menu" type="checkbox" />
      <label className={styles.label} for="responsive-menu">HOME PAGE <span className={styles["menu-icon"]}></span></label>
      <div className={styles.overlay}></div>
      <ul className={styles.ul}>
          <li className={styles.li}><a className={styles.a} >Meals</a></li>
          <li className={styles.li}><a className={styles.a} >MealsDB</a></li>
          <li className={styles.li}><a className={styles.a} >Straip</a></li>
          <li className={styles.li}><a className={styles.a} >Project</a></li>
      </ul>
      <ul className={styles.ul} className={styles["social-media"]}>
          <li className={styles.li}>
              <a className={styles.a} href="https://dribbble.com/erinesullivan">
                  <i className="fab fa-dribbble"></i>
                  <span className={styles["screen-reader-text"]}>Dribbble</span>
              </a>
          </li>
          <li className={styles.li}>
              <a className={styles.a} href="http://codepen.io/erinesullivan/">
                  <i className="fab fa-codepen"></i>
                  <span className={styles["screen-reader-text"]}>CodePen</span>
              </a>
          </li>
          <li className={styles.li}>
              <a className={styles.a} href="https://twitter.com/erin_e_sullivan">
                  <i className="fab fa-twitter"></i>
                  <span className={styles["screen-reader-text"]}>Twitter</span>
              </a>
          </li>
          <li className={styles.li}>
              <a className={styles.a} href="https://www.linkedin.com/in/erinesullivan1">
                  <i className="fab fa-linkedin"></i>
                  <span className={styles["screen-reader-text"]}>LinkedIn</span>
              </a>
          </li>
          <li className={styles.li}>
              <a className={styles.a} href="https://www.instagram.com/erin_e_sullivan/">
                  <i className="fab fa-instagram"></i>
                  <span className={styles["screen-reader-text"]}>Instagram</span>
              </a>
          </li>
      </ul>
  </div>
  
  

  </nav>
  <main className={styles.main}>
    <div className={styles.container}>
        <h1 className={styles.h1}>Welcome to my project</h1>
        <p className={styles.p}>Hi! I'm 陳至賢.And this is my final project,hope you like it and enjoy it.</p>
        <p>甘苦談:</p>
    </div>
    </main>
  </div>
  )
}