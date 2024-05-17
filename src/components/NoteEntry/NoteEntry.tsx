import styles from "./NoteEntry.module.css";

import { useState } from "react";
import { getNoteAnnotation, getNoteValue } from "../../util/translateNotes";
import { IoIosArrowForward, IoIosMusicalNotes } from "react-icons/io";

interface IProps {
  notes: number[];
  setNotes: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function NoteEntry({ notes, setNotes }: IProps) {
  const [input, setInput] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    if (inputValue.length > 0) {
      const capitalizedInput =
        inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
      setInput(capitalizedInput);
    } else {
      setInput(inputValue);
    }
  }

  function addNote() {
    const trimmedInput = input.trim();
    if (trimmedInput) {
      const noteValue = getNoteValue(trimmedInput);
      if (!notes.includes(noteValue)) {
        setNotes((prevNotes) => [...prevNotes, getNoteValue(trimmedInput)]);
      }
      setInput("");
    }
  }

  return (
    <div className={styles.noteEntry}>
      <h3>
        <IoIosMusicalNotes />
        Note input
      </h3>
      <div className={styles.inputs}>
        <div className={styles.addNotes}>
          <input
            type="text"
            onChange={handleInputChange}
            value={input}
            placeholder="Enter a note, like C"
            maxLength={2}
          />
          <button onClick={addNote}>
            Add note
            <IoIosArrowForward />
          </button>
        </div>
        <div className={styles.annotations}>
          {notes.map((note) => {
            const annotation = getNoteAnnotation(note);
            return (
              <div key={note}>
                <span>{annotation[0]}</span>
                {annotation.length === 3 ? <span>, {annotation[2]}</span> : ""}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
