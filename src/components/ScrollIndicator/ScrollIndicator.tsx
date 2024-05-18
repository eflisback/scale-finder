import { IoIosArrowUp } from "react-icons/io";
import styles from "./ScrollIndicator.module.css";

interface IProps {
  opacity: number;
}

export default function ScrollIndicator({ opacity }: IProps) {
  return (
    <div className={styles.scrollIndicator} style={{ opacity }}>
      <span>
        <IoIosArrowUp />
        <IoIosArrowUp />
      </span>
      <span>
        <IoIosArrowUp />
        <IoIosArrowUp />
      </span>
    </div>
  );
}
