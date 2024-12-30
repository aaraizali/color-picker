"use client";

import { useState, ChangeEvent } from "react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ColorPicker() {
  const [color, setColor] = useState<string>("#000000");
  const [copySuccess, setCopySuccess] = useState<string>("");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setColor(e.target.value);
    setCopySuccess(""); // Reset success message on color change
  };

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(color);
    setCopySuccess("Copied!"); // Show success message
    setTimeout(() => setCopySuccess(""), 2000); // Clear message after 2 seconds
  };

  const toggleDarkMode = (): void => {
    setIsDarkMode(!isDarkMode);
  };

  const presetColors = ["#FF5733", "#33FF57", "#3357FF", "#FFFF33", "#FF33FF"];

  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gradient-to-r from-purple-500 to-blue-500 text-gray-800"
      }`}
    >
      <div className="absolute top-4 right-4">
        <Button
          onClick={toggleDarkMode}
          className={`py-2 px-4 rounded-lg font-semibold shadow-md transition-colors ${
            isDarkMode
              ? "bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-white text-gray-800 hover:bg-gray-200"
          }`}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>
      <Card
        className={`p-6 rounded-xl shadow-xl w-96 transition-transform duration-300 hover:scale-105 hover:-translate-y-2 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
            🎨 Color Picker
          </h1>
          <p className="text-sm">
            Choose a color, explore options, and copy its code with ease.
          </p>
        </div>
        <div className="mt-4 flex gap-2 justify-center">
          {presetColors.map((preset, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-full cursor-pointer hover:scale-110 transition-transform duration-200 border border-gray-300 shadow-md"
              style={{ backgroundColor: preset }}
              onClick={() => setColor(preset)}
            ></div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <div
            className="w-20 h-20 rounded-lg border-2 border-gray-300 shadow-lg"
            style={{ backgroundColor: color }}
          ></div>
        </div>
        <div className="mt-6">
          <Input
            type="text"
            value={color}
            onChange={handleColorChange}
            className={`text-center font-mono ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100"
            }`}
          />
        </div>
        <div className="mt-4">
          <Button
            onClick={copyToClipboard}
            className={`w-full font-semibold py-2 rounded-lg shadow-md transition-all duration-200 ${
              isDarkMode
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            Copy Color Code
          </Button>
          {copySuccess && (
            <p
              className={`mt-2 text-center text-sm font-semibold ${
                isDarkMode ? "text-green-400" : "text-green-600"
              }`}
            >
              {copySuccess}
            </p>
          )}
        </div>
      </Card>
      <footer className="mt-8 text-center text-sm">
        Made with ❤️ by{" "}
        <span
          className={`font-bold ${
            isDarkMode ? "text-blue-400" : "text-blue-700"
          }`}
        >
          Aaraiz
        </span>
      </footer>
    </div>
  );
}
