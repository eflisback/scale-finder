import { useEffect, useState } from "react";
import styles from "./PianoModal.module.css";
import { RxCross2 } from "react-icons/rx";
import { Piano, MidiNumbers } from "react-piano";
import { getNoteAnnotation, getNoteValue } from "../../util/translateNotes";
import "react-piano/dist/styles.css";

export default function PianoModal({ isOpen, setIsOpen, scale }) {
  const [activeNotes, setActiveNotes] = useState([]);
  const intervalStart = MidiNumbers.fromNote("c3");
  const intervalEnd = MidiNumbers.fromNote("e5");

  useEffect(() => {
    let toBeActiveNotes = [];
    const startNote = getNoteValue(scale.annotations[0]) + 45;
    toBeActiveNotes.push(startNote);

    let current = startNote;
    for (const increment of scale.type.sequence) {
      current += increment;
      toBeActiveNotes.push(current);
    }

    if (toBeActiveNotes[0] < intervalStart) {
      toBeActiveNotes = toBeActiveNotes.map((number) => number + 12);
    } else if (toBeActiveNotes[toBeActiveNotes.length - 1] > intervalEnd) {
      toBeActiveNotes = toBeActiveNotes.map((number) => number - 12);
    }
    setActiveNotes(toBeActiveNotes);
  }, [scale, intervalStart, intervalEnd]);

  if (!isOpen) return;

  return (
    <div className={styles.background} onClick={() => setIsOpen(false)}>
      <div
        className={styles.modal}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className={styles.header}>
          <h3>
            {scale.annotations[0]} {scale.type.name}
          </h3>
          <RxCross2 onClick={() => setIsOpen(false)} />
        </div>
        <div>
          <span>
            <i>
              {scale.annotations[0]}
              {scale.annotations.length === 3 && (
                <span>
                  {" ("}or {scale.annotations[2] + ")"}
                </span>
              )}{" "}
              {scale.type.name}{" "}
            </i>
            consists of the notes:
            <div className={styles.annotations}>
              {scale.notes.map((note, index) => {
                const annotation = getNoteAnnotation(note);
                return (
                  <span key={`${note}, ${index}`} className={styles.annotation}>
                    {annotation[0]}
                    {annotation.length === 3 && (
                      <span>{", " + annotation[2]}</span>
                    )}
                    {index === scale.notes.length - 1 && <i> (+1)</i>}
                  </span>
                );
              })}
            </div>
          </span>
        </div>
        <div className={styles.pianoHolder}>
          <Piano
            className={styles.piano}
            noteRange={{
              first: intervalStart,
              last: intervalEnd,
            }}
            playNote={() => {}}
            stopNote={() => {}}
            activeNotes={activeNotes}
          />
        </div>
      </div>
    </div>
  );
}
