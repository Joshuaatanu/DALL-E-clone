import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState('')
  // console.log(import.meta.env.VITE_OPENAI_API_KEY);

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    setResult(res.data.data[0].url);
  };

  return (
    <div className="app-main">
      <h3>Generate an image using OpenAI Api</h3>
      <input
      placeholder="Type something to generate an image"
        className="app-input"
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImage}>generate an image</button>
      {result.length > 0 ?<img src={result} alt="result" className="result-image"/>:<></>}
    </div>
  );
}

export default App;
