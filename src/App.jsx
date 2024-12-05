import React from "react";
import Chatbot from "./components/Chatbot";

const HomePage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>HealthVerse Chatbot</h1>
      <Chatbot />
    </div>
  );
};

export default HomePage;
