export const formatLabel = (label: string) => {
  //removes hyphens, and coverts to title case
  return label
    .replace("-", " ")
    .split(" ")
    .map((i) => i[0].toUpperCase() + i.substring(1).toLowerCase())
    .join(" ");
};
