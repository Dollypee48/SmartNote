export const getWordDefinition = async (word) => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`
    );
    const data = await response.json();
    return data[0]?.meanings[0]?.definitions[0]?.definition || "No definition found";
  } catch (error) {
    console.error("Dictionary API error:", error);
    return "Could not fetch definition";
  }
};