// Import the required modules
const express = require("express");
const path = require("path");

// Create an instance of the express app
const app = express();

// Set the port for the server
const PORT = process.env.PORT || 3000;

// Serve static files (like HTML, CSS, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Serve the main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Define a simple API endpoint for testing
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

// Handle 404 for other undefined routes
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
