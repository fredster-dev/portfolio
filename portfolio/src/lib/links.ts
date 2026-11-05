/** Knapptext som säger vart länken leder, så besökaren vet vad som händer innan klicket. */
export const projectLinkLabel = (url: string) => {
  if (/figma\.com/i.test(url)) return 'View in Figma';
  if (/github\.com/i.test(url)) return 'View on GitHub';
  return 'View project';
};
