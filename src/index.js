// Basic React Setup

// Import the necessary modules from the React library.
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import the main component of the application from "./App".

// Get the root DOM element with the id 'root'.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the 'App' component inside the root element.
root.render(<App />);
