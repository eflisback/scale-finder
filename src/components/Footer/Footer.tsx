import styles from "./Footer.module.css";
import { FaGithub, FaInstagram, FaLinkedin, FaSpotify } from "react-icons/fa";
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
          tools that already existed in its place. I hope this simple Scale
          Finder brought you joy. If you have any feedback, feature requests or
          similar, feel free to check out{" "}
          <a href="https://github.com/eflisback/scale-finder">the repository</a>{" "}
          over on GitHub.
        </span>
      </section>
      <section id={styles.right}>
        <span className={styles.title}>Socials</span>
        <div className={styles.iconList}>
          <div>
            <a href="https://github.com/eflisback" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ebbe-flisb%C3%A4ck-a89a3a296/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/eflisback/" target="_blank">
              <FaInstagram />
            </a>
            <a
              href="https://open.spotify.com/artist/1xCUUcfm6UFnMH125m3dJV?si=103c24a68c5b4f10"
              target="_blank"
            >
              <FaSpotify />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
