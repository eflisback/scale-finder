import { useState } from "react";
import styles from "./ScaleSection.module.css";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

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
              <div key={index} className={styles.scale}>
                {scale.annotations.length > 1 ? (
                  <span>
                    {scale.annotations[0]}, {scale.annotations[2]}
                  </span>
                ) : (
                  <span>{scale.annotations[0]}</span>
                )}{" "}
                {scale.type.name}
              </div>
            ))
          ) : (
            <span className={styles.noMatches}>
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
