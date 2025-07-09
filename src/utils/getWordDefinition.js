export async function getWordDefinition(word) {
  try {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await res.json();
    return data[0]?.meanings?.[0]?.definitions?.[0]?.definition || "No definition found.";
  } catch {
    return "Failed to fetch definition.";
  }
}
