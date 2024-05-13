const majorSequence = [2, 2, 1, 2, 2, 2, 1] as const;
const minorSequence = [2, 1, 2, 2, 1, 2, 2] as const;

type Major = typeof majorSequence;
type Minor = typeof minorSequence;

interface Scale {
  annotation: string;
  type: Major | Minor;
}
