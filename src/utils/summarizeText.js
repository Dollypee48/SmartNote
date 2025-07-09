export async function summarizeText(text) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const sentences = text.split(". ");
      const firstFew = sentences.slice(0, 3).join(". ");
      resolve(firstFew + (sentences.length > 3 ? "..." : ""));
    }, 1000);
  });
}
