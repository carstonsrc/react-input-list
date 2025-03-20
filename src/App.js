import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [buttonColor, setButtonColor] = useState("#007bff");
  const [loading, setLoading] = useState(true);
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue("");
      confetti();
      changeButtonColor();
      changeBackground();
      showGifTemporarily();
    }
  };

  const changeButtonColor = () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setButtonColor(randomColor);
  };

  const changeBackground = () => {
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const showGifTemporarily = () => {
    setShowGif(true);
    setTimeout(() => setShowGif(false), 3000);
  };

  return (
    <div className="container">
      {loading ? (
        <img src="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_620/MTc1MjcyNTI5ODQwMTg2NzUw/funny-and-witty-responses-to-the-question-why-should-we-hire-you.webp" alt="Loading Meme" className="loading-image" />
      ) : (
        <>
          <div className="left-section">
            <h2>Your Awesome List!</h2>
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="right-section">
            <h2>Input Section</h2>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter something..."
            />
            <button onClick={handleAddItem} style={{ backgroundColor: buttonColor }}>
              Add to List
            </button>
          </div>
          {showGif && (
            <div className="gif-container">
              <img src="https://64.media.tumblr.com/b46ef49fba14a0435d3ba345eb3e64c0/3bbe3fa4dd731437-7f/s540x810/32d316f6f016be953f77f3456846adf416b84a03.gifv" alt="Celebration GIF" className="celebration-gif" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;
