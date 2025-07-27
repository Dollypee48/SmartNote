export const summarizeText = async (text, max_length = 100) => {
  const API_KEY = import.meta.env.VITE_APYHUB_API_KEY;
  const submitURL = "https://api.apyhub.com/sharpapi/api/v1/content/summarize";

  try {
    if (!API_KEY) throw new Error("Missing API Key. Check your .env config.");
    if (!text || typeof text !== "string" || text.trim().length === 0) {
      throw new Error("Please enter valid text to summarize");
    }

    
    const submitRes = await fetch(submitURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apy-token": API_KEY,
      },
      body: JSON.stringify({
        content: text,
        max_length,
        language: "en",
        voice_tone: "concise",
      }),
    });

    const submitData = await submitRes.json();

    if (!submitRes.ok || !submitData?.job_id) {
      throw new Error(`Submit failed: ${submitData?.message || "No job ID returned"}`);
    }

    const job_id = submitData.job_id;

    
    let attempts = 0;
    let summary = null;
    let delay = 5000; 

    while (attempts < 6) { 
      await new Promise((r) => setTimeout(r, delay));

      const statusRes = await fetch(
        `https://api.apyhub.com/sharpapi/api/v1/content/summarize/job/status/${job_id}`,
        {
          headers: {
            "apy-token": API_KEY,
          },
        }
      );

      const statusData = await statusRes.json();

      if (statusRes.ok && statusData?.data?.summary) {
        summary = statusData.data.summary;
        break;
      } else if (statusRes.status === 429) {
        
        console.warn("Rate limited, increasing delay before next poll.");
        delay = Math.min(delay * 2, 64000); 
      } else {
        
        delay = Math.min(delay * 2, 64000);
      }

      attempts++;
    }

    if (!summary) {
      throw new Error("Status check failed: Summary not ready or not found after retries.");
    }

    return {
      summary,
      status: "success",
      source: "sharpapi",
    };
  } catch (error) {
    console.error("API summarization failed:", error);
    return {
      summary: getFirstLines(text, 3),
      status: "error",
      error: error.message,
      source: "fallback",
    };
  }
};

function getFirstLines(text, lineCount) {
  const lines = text.split("\n").filter((l) => l.trim().length > 0);
  return lines.slice(0, lineCount).join("\n");
}
