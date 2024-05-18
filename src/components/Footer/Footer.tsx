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
        <span className={styles.title}>About</span>
        <span>
          Hi! I'm Ebbe, a software engineering student from Sweden who also
          dabbles in music production. I made this web app as a showcase project
          for my resumé, but also because I wasn't satisfied with the online
          tools that already existed in its place. I hope Simple Scale Finder
          brought you joy. If you have any feedback, feature requests or
          similar, feel free to check out{" "}
          <a href="https://github.com/eflisback/scale-finder">the repository</a>{" "}
          over on GitHub.
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
