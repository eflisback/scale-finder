import styles from "./NoteEntry.module.css";

import { useState } from "react";
import { getNoteAnnotation, getNoteValue } from "../../util/translateNotes";
import { IoIosMusicalNotes, IoMdAdd, IoMdRemove } from "react-icons/io";
import { NOTES } from "../../variables";

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
      if (!notes.includes(noteValue) && noteValue !== -1) {
        setNotes((prevNotes) => [...prevNotes, getNoteValue(trimmedInput)]);
      }
      setInput("");
    }
  }

  function removeNote(note: number) {
    setNotes((prevNotes) => prevNotes.filter((n) => n !== note));
  }

  function clearInput() {
    setNotes([]);
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
            placeholder={`Enter a note, like ${(() => {
              const randomFirstIndex = ~~(Math.random() * NOTES.length);
              const randomSecondIndex = ~~(
                Math.random() * NOTES[randomFirstIndex].length
              );
              return NOTES[randomFirstIndex][randomSecondIndex];
            })()}...`}
            maxLength={2}
            autoFocus
            autoCapitalize=""
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                addNote();
              }
            }}
          />
          <div className={styles.buttons}>
            <button onClick={addNote} className={styles.addButton}>
              Add note
              <IoMdAdd />
            </button>
            <button onClick={clearInput} className={styles.clearButton}>
              Clear input
              <IoMdRemove />
            </button>
          </div>
        </div>
        <div className={styles.annotations}>
          {notes.map((note) => {
            const annotation = getNoteAnnotation(note);
            return (
              <button key={note} onClick={() => removeNote(note)}>
                <span>{annotation[0]}</span>
                {annotation.length === 3 ? <span>, {annotation[2]}</span> : ""}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
