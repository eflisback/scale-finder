interface ScaleType {
  name: string;
  sequence: number[];
}

interface Scale {
  notes: number[];
  annotation: string;
  type: ScaleType;
}
