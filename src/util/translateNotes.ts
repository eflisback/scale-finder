import { notes } from "../variables";

export function getNoteValue(annotation: string): number {
  for (let index = 0; index < notes.length; index++) {
    if (notes[index].includes(annotation)) {
      return index;
    }
  }
  return -1;
}

export function getNoteAnnotation(noteValue: number): string {
  return notes[noteValue][0];
}
