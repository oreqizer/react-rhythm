export function boxMargin(lineRatio, scale) {
  const lines = Math.ceil(scale / lineRatio);
  const height = lineRatio * scale;
  const leftover = (lineRatio * lines) - height;

  return leftover / 2;
}


export function lineHeight(lineRatio, scale) {
  const lines = Math.ceil(scale / lineRatio);

  return lineRatio * lines;
}
