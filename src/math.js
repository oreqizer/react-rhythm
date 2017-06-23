/**
 * Calculates the top/bot margin of a box.
 * @param baseLineRatio - ratio between the base font size and line height
 * @param baseFontSize - base font size used across the page
 * @param scale - box height scale versus the base font size
 * @returns {number} - pixels to apply to the top/bot margin
 */
export function boxMargin(baseLineRatio, baseFontSize, scale) {
  const lines = Math.ceil(scale / baseLineRatio);
  const height = baseLineRatio * scale;
  const leftover = height - (baseLineRatio * lines);

  return (leftover / 2) * baseFontSize;
}

/**
 * Calculates the line height and rounds it.
 * @param baseLineRatio - ratio between the base font size and line height
 * @param baseFontSize - base font size used across the page
 * @param scale - font size scale versus the base font size
 * @returns {number} - pixels to apply to the line height
 */
export function roundLines(baseLineRatio, baseFontSize, scale) {
  const lines = Math.ceil(scale / baseLineRatio);

  return baseLineRatio * lines * baseFontSize;
}
