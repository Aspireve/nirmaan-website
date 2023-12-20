"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const UploadForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    title: "",
    image: null,
    caption: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("username", formData.username);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("title", formData.title);
    formDataToSend.append("caption", formData.caption);
    formDataToSend.append("image", formData.image);

    try {
      const response = await fetch("http://localhost:3002/api/upload", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        console.log("Upload successful!");
        setSuccessMessage("Upload successful!");
        // Optionally, you can reset the form here
        setFormData({
          username: "",
          email: "",
          title: "",
          image: null,
          caption: "",
        });

        // Clear success message after a delay
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        console.error("Upload failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md"
    >
      {successMessage && (
        <div className="mb-4 text-green-600">{successMessage}</div>
      )}
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700">
          Image:
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="caption" className="block text-gray-700">
          Caption:
        </label>
        <textarea
          id="caption"
          name="caption"
          value={formData.caption}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Upload
      </button>
    </motion.form>
  );
};

export default UploadForm;
