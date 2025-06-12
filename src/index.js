import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Global styles
import App from "./App"; // Main App component

// Create root using React 18+ API
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render App inside React.StrictMode for development checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
