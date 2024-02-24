import React, { useState, useEffect } from "react";
import axios from "axios";
import { generateText } from "@google/generative-ai";


const API_KEY = "AIzaSyCXT-lC0ZRe8EBimDjnfyL0dWs-2e7DxQA"; // Replace with your actual API key

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUserInput = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await generateText({
        prompt: messages.concat([userInput]).join("\n"),
        apiKey: API_KEY,
        model: "gemini-pro-1.4-turbo", // Use the desired Gemini model
        temperature: 0.7,
      });

      setMessages((prevMessages) => [...prevMessages, response.text]);
      setUserInput("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // ... rest of the component code
}

export default Chatbot;
