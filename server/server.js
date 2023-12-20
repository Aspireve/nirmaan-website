// server.js
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs/promises");

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/images"),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// API endpoint for handling file uploads
app.post("/api/upload", upload.single("image"), async (req, res) => {
  try {
    // Access other form fields from req.body, including the date
    const { username, email, title, caption, date } = req.body;

    // Get the uploaded file information
    const { originalname: imageName, path: imagePath } = req.file;

    // Save information to a JSON file in the root/public directory
    const newPost = {
      username,
      email,
      title,
      image: `${imageName}`,
      caption,
      date,
    };
    const postsPath = path.join(__dirname, "../public", "posts.json");
    const existingPosts = JSON.parse(await fs.readFile(postsPath, "utf-8"));
    const updatedPosts = [...existingPosts, newPost];

    await fs.writeFile(postsPath, JSON.stringify(updatedPosts, null, 2));

    // Respond with success
    res.json({ success: true });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
