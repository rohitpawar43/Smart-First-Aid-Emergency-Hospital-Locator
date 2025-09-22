export const fetchAISuggestions = async (symptoms: string[], severity: { [key: string]: string }) => {
  console.log("API Key:", import.meta.env.VITE_OPENAI_API_KEY); 

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}` 
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: "You are a medical assistant. Provide possible conditions based on symptoms and severity." },
          { role: 'user', content: `Symptoms: ${symptoms.join(', ')}. Severity: ${JSON.stringify(severity)}.` }
        ]
      })
    });

    console.log("Response Status:", response.status); 

    if (!response.ok) throw new Error(`API Error: ${response.status}`);

    const data = await response.json();
    console.log("Response Data:", data); 

    return data.choices?.[0]?.message?.content.split('\n') || ["No suggestions available."];
  } catch (error) {
    console.error("Error fetching AI suggestions:", error);
    return ["Failed to get AI suggestions. Please try again later."];
  }
};
