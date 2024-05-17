import { NOTES } from "../variables";

export function getNoteValue(annotation: string): number {
  for (let index = 0; index < NOTES.length; index++) {
    if (NOTES[index].includes(annotation)) {
      return index;
    }
  }
  return -1;
}

export function getNoteAnnotation(noteValue: number): string[] {
  return NOTES[noteValue];
}
