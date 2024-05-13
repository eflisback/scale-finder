import { useState } from "react";
import { notes } from "../../variables";

interface IProps {
  setNotes: React.Dispatch<React.SetStateAction<number[]>>;
}

function getNoteValue(annotation: string): number {
  for (let index = 0; index < notes.length; index++) {
    if (notes[index].includes(annotation)) {
      return index;
    }
  }
  return -1;
}

export default function NoteEntry({ setNotes }: IProps) {
  const [annotations, setAnnotations] = useState<string[]>(Array(7).fill(""));

  const handleInputChange = (index: number, value: string) => {
    const newAnnotations = [...annotations];
    newAnnotations[index] = value;
    setAnnotations(newAnnotations);

    const noteValues = new Set(
      newAnnotations.map(getNoteValue).filter((value) => value !== -1)
    );
    setNotes(Array.from(noteValues));
  };

  return (
    <div>
      {annotations.map((annotation, index) => (
        <input
          key={index}
          value={annotation}
          onChange={(e) => handleInputChange(index, e.target.value)}
          placeholder="Enter note (e.g., C#, Db, D♭)"
          style={{ margin: "5px" }}
        />
      ))}
    </div>
  );
}
