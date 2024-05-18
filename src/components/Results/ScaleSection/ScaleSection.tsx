import { useState } from "react";
import styles from "./ScaleSection.module.css";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import ScaleButton from "./ScaleButton/ScaleButton";
import { TiDeleteOutline } from "react-icons/ti";

interface IProps {
  categoryTitle: string;
  scales: Scale[];
  expandedByDefault?: boolean;
}

export default function ScaleSection({
  categoryTitle,
  scales,
  expandedByDefault,
}: IProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(
    expandedByDefault || false
  );

  return (
    <>
      <span
        className={styles.categoryTitle}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <IoIosArrowDown /> : <IoIosArrowForward />}
        {categoryTitle}
      </span>
      {isExpanded ? (
        <div className={styles.scales}>
          {scales.length !== 0 ? (
            scales.map((scale, index) => (
              <ScaleButton key={index} scale={scale} />
            ))
          ) : (
            <span className={styles.noMatches}>
              <TiDeleteOutline />
              No matching {categoryTitle.toLowerCase()} found...
            </span>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
