import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";

function App() {

  console.log(import.meta.env.VITE_OPENAI_API_KEY);
  
  const configuration = new Configuration({
    apiKey:import.meta.env.VITE_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const generateImage = async () => {
    const res = await openai.createCompletion({
      prompt: "a white siamese cat",
      n: 1,
      size: "1024x1024",
    });
    console.log(res.data.data[0].url);
  };

  return <div>
    <button onClick={generateImage}>generate an image</button>
  </div>;
}

export default App;
