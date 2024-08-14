// index.js
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const { body, validationResult } = require("express-validator");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json()); // To parse JSON bodies

// GET /comments route
app.get("/comments", async (req, res) => {
  try {
    const response = await fetch("https://dummyjson.com/comments");
    const data = await response.json();
    res.status(200).json({ comments: data.comments }); // Ensure it actually sends the `comments` property
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// New POST /comments route
app.post(
  "/comments",
  // Validation chain using express-validator
  [
    body("body").isString().withMessage("Body must be a string"),
    body("postId")
      .isInt({ min: 1 })
      .withMessage("Post ID must be a positive integer"),
    body("userId")
      .isInt({ min: 1 })
      .withMessage("User ID must be a positive integer"),
  ],
  async (req, res) => {
    // Handle validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // The following code runs if validation passes
    const { body, postId, userId } = req.body;

    try {
      const response = await fetch("https://dummyjson.com/comments/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body, postId, userId }),
      });

      const newComment = await response.json();
      res.status(201).json(newComment);
    } catch (error) {
      console.error("Error adding comment:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app; // Exporting the app for testing
