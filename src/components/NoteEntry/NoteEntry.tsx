import styles from "./NoteEntry.module.css";

import { useState } from "react";
import { getNoteValue } from "../../util/translateNotes";
import { IoIosMusicalNotes } from "react-icons/io";

interface IProps {
  setNotes: React.Dispatch<React.SetStateAction<number[]>>;
}

const placeholders = ["E♭", "F", "G", "G#", "Bb", "C", "D"];

export default function NoteEntry({ setNotes }: IProps) {
  const [annotations, setAnnotations] = useState<string[]>(Array(7).fill(""));

  function handleInputChange(index: number, value: string) {
    const capitalizedValue =
      value.length > 0
        ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
        : value;

    const newAnnotations = [...annotations];
    newAnnotations[index] = capitalizedValue;
    setAnnotations(newAnnotations);

    const noteValues = new Set(
      newAnnotations.map(getNoteValue).filter((value) => value !== -1)
    );
    setNotes(Array.from(noteValues));
  }

  return (
    <div className={styles.noteEntry}>
      <h3>
        <IoIosMusicalNotes />
        Note input
      </h3>
      <div className={styles.inputs}>
        {annotations.map((annotation, index) => (
          <input
            autoFocus={index === 0}
            key={index}
            value={annotation}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder={placeholders[index]}
            size={2}
            maxLength={2}
            tabIndex={index + 1}
          />
        ))}
      </div>
    </div>
  );
}
