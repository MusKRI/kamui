// Turn an array of sampled easing values into a smooth easing function
export function createEaseFromArray(values: number[]) {
  return (t: number) => {
    const scaled = t * (values.length - 1);
    const i = Math.floor(scaled);
    const frac = scaled - i;

    const v1 = values[i];
    const v2 = values[i + 1] ?? v1;

    return v1 + (v2 - v1) * frac; // linear interpolation for smoothness
  };
}
