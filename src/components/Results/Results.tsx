import { useEffect, useState } from "react";
import styles from "./Results.module.css";
import { IoList } from "react-icons/io5";
import ScaleSection from "./ScaleSection/ScaleSection";

interface IProps {
  matchingScales: Scale[];
}

const scaleTypes = [
  "Major",
  "Natural minor",
  "Harmonic minor",
  "Melodic minor",
  "Major pentatonic",
  "Minor pentatonic",
];

export default function Results({ matchingScales }: IProps) {
  const [scalesByCategory, setScalesByCategory] = useState<{
    [key: string]: Scale[];
  }>({});

  useEffect(() => {
    const newScalesByCategory: { [key: string]: Scale[] } = {};
    scaleTypes.forEach((type) => {
      newScalesByCategory[type] = matchingScales.filter(
        (scale) => scale.type.name === type
      );
    });
    setScalesByCategory(newScalesByCategory);
  }, [matchingScales]);

  return (
    <div className={styles.results}>
      <h3>
        <IoList /> Matching scales
      </h3>
      <div className={styles.scrollable}>
        {scaleTypes.map((type, index) => (
          <ScaleSection
            key={type}
            categoryTitle={`${type} scales`}
            scales={scalesByCategory[type] || []}
            expandedByDefault={index < 4}
          />
        ))}
      </div>
    </div>
  );
}
