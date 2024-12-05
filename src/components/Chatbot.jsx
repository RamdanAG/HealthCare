import React, { useState } from "react";
import axios from "axios";
import '../style/chatbot.css'

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post("http://localhost:5000/api/chatbot", { message: input });
      const botMessage = { sender: "bot", text: response.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
    }

    setInput("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <div style={{ border: "1px solid #ccc", padding: "10px", height: "300px", overflowY: "auto" }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              margin: "10px 0",
            }}
          >
            <span style={{ padding: "8px", background: msg.sender === "user" ? "#cce5ff" : "#e2e3e5" }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "70%", padding: "8px" }}
        placeholder="Ketik pesan..."
      />
      <button onClick={sendMessage} style={{ padding: "8px", marginLeft: "5px" }}>
        Kirim
      </button>
    </div>
  );
};

export default Chatbot;
