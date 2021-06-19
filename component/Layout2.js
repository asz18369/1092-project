
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
          <li className={styles.li}><a className={styles.a} href="/">Home Page</a></li>
          <li className={styles.li}><a className={styles.a} href="../project/meal">Meals</a></li>
          <li className={styles.li}><a className={styles.a} href="../project/mealdb">MealsDB</a></li>
          <li className={styles.li}><a className={styles.a} href="https://strapi-209410140-1092.herokuapp.com/">Heroku連結</a></li>
          <li className={styles.li}><a className={styles.a} href="https://github.com/asz18369/1091-1N-demo-209410140">靜態網頁設計Github</a></li>
      </ul>
      <ul className={styles.ul} className={styles["social-media"]}>
          <li className={styles.li}>
              <a className={styles.a} href="">
                  <i className="fab fa-dribbble"></i>
                  <span className={styles["screen-reader-text"]}>Dribbble</span>
              </a>
          </li>
          <li className={styles.li}>
              <a className={styles.a} href="">
                  <i className="fab fa-codepen"></i>
                  <span className={styles["screen-reader-text"]}>CodePen</span>
              </a>
          </li>
          <li className={styles.li}>
              <a className={styles.a} href="">
                  <i className="fab fa-twitter"></i>
                  <span className={styles["screen-reader-text"]}>Twitter</span>
              </a>
          </li>
          <li className={styles.li}>
              <a className={styles.a} href="">
                  <i className="fab fa-linkedin"></i>
                  <span className={styles["screen-reader-text"]}>LinkedIn</span>
              </a>
          </li>
          <li className={styles.li}>
              <a className={styles.a} href="">
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
        <h1 className={styles.h1}>209410140 陳至賢</h1>
        <p className={styles.p}>Hi ! I'm Chen Chih-Hsien.And this is my final project,hope you like it and enjoy it. Have fun !</p>
        <p></p>
    </div>
    </main>
  </div>
  )
}