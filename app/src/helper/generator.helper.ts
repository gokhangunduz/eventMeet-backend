export function generateId(): string {
  return [...Array(48)]
    .map(() => Math.random().toString(36)[2] || "0")
    .join("");
}

export function getCurrentUnixTimeStamp(): number {
  return Math.floor(Date.now() / 1000);
}
