import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useState } from "react";

const genAI = new GoogleGenerativeAI("AIzaSyC6L0mf9MyQ-yk235PO26mC8zqnO5JGj5I");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const ChatBot = () => {
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const aiRun = async () => {
    setLoading(true);

    try {
      const prompt = `The waste-to-energy platform connects households and businesses with local facilities to convert organic waste into energy, using blockchain technology to facilitate the exchange of organic waste for energy credits, promoting sustainable waste disposal and energy production. Users can submit organic waste, track energy credits, and engage in energy credit transactions, with additional features including community events and educational resources on waste management and renewable energy. Benefits for users include reduced waste management costs, access to clean energy, and environmental sustainability through reduced greenhouse gas emissions and promotion of renewable energy. The platform utilizes blockchain for secure transactions and data management, integrates with waste-to-energy facilities and energy grids for efficient energy production and distribution, and offers user support for common inquiries and assistance. Users are encouraged to participate in community engagement activities and adhere to regulatory compliance regarding waste management and data privacy laws for transparency and environmental responsibility. answer this ${search} using the above paragraph`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();
      setAiResponse(text);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setAiResponse("Error fetching AI response");
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    if (search.trim() !== "") {
      aiRun();
    }
  };

  const handleClear = () => {
    setAiResponse("");
  };

  return (
    <div>
      <h1>Talk With ChatBot</h1>
      <p>Built with ❤️ </p>

      <div style={{ display: "flex" }}>
        <input placeholder="Search" onChange={(e) => handleChangeSearch(e)} />
        <button
          className="bg-gray-300 text-xl text-black rounded-md shadow-lg"
          style={{ marginLeft: "20px" }}
          onClick={() => handleClick()}
        >
          Search
        </button>
        <button
          className="bg-gray-300 text-xl text-black rounded-md shadow-lg"
          style={{ marginLeft: "20px" }}
          onClick={() => handleClear()}
        >
          Clear
        </button>
      </div>

      {loading ? (
        <p style={{ margin: "30px 0" }}>Loading...</p>
      ) : (
        <div style={{ margin: "30px 0" }}>
          <p>{aiResponse}</p>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
