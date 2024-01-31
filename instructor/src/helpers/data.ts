export function dataTransformation(data: string) {
  const inputDate = new Date(data);
  return inputDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
