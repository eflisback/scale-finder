interface ScaleType {
  name: string;
  sequence: number[];
}

interface Scale {
  notes: number[];
  annotations: string[];
  type: ScaleType;
}

declare module "*.jsx" {
  var _: () => any;
  export default _;
}
