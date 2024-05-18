import { FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";
import { BsMusicNoteList } from "react-icons/bs";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <section>
        <span className={styles.title}>Links</span>
        <div className={styles.linkList}>
          <a href="https://github.com/eflisback/scale-finder" target="_blank">
            <FaGithub />
            Source code
          </a>
          <a href="https://www.pianote.com/blog/piano-scales/" target="_blank">
            <BsMusicNoteList />
            Piano Scales
          </a>
        </div>
      </section>
      <section id={styles.center}>
        <span className={styles.title}>About Simple Scale Finder</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          accusamus, error est qui officiis officia nihil quisquam culpa
          voluptatem pariatur ea labore non consequatur iure quos soluta alias
          aut. Ullam?
        </span>
      </section>
      <section id={styles.right}>
        <span className={styles.title}>Socials</span>
        <div className={styles.linkList}>
          <span>Something here</span>
        </div>
      </section>
    </div>
  );
}
