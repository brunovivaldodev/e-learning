export function removeTimestamp(filename: string) {
  const parts = filename.split("-");

  const filenameWithoutTimestamp = parts.slice(0, -1).join("-");

  return filenameWithoutTimestamp;
}
