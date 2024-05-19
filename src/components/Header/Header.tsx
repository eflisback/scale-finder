import styles from "./Header.module.css";
// import { ReactComponent as YourSvg } from "/simple-scale-finder-icon.svg";

export default function Header() {
  return (
    <div className={styles.header}>
      <span>Simple Scale Finder</span>
      <span className={styles.credits}>
        , by <span className={styles.gradient}>eflisback</span>
      </span>
    </div>
  );
}
