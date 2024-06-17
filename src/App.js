// src/App.js
import React, { useState } from "react";
import logo from "/Users/Inteli/Desktop/PreviewComProject/src/assets/LogoPreviewCom.png";

function App() {
  const [humidity, setHumidity] = useState("10-20");
  const [temperature, setTemperature] = useState("");
  const [location, setLocation] = useState("north-america");
  const [commodity, setCommodity] = useState("coffee");
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);

  const analyzeData = async () => {
    setIsLoading(true);
    setPrediction(null);

    try {
      document.querySelector('.loading').style.display = 'block';
      document.querySelector('.indicator.up').style.display = 'none';
      document.querySelector('.indicator.down').style.display = 'none';

      while (isLoading) {
          document.querySelector('.loading').style.display = 'none';
      }

      const response = await fetch("api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          humidity,
          temperature,
          region: location,
        }),
      });
      const result = await response.json();
      for (let edge of result.data.notices.edges) {
        let payload = edge.node.payload;
      }

      const data = await response.json();
      setPrediction(data.predictedPrice);
      if (JSON.stringify(data.predictedPrice) === 'increase') {
        document.querySelector('.indicator.up').style.display = 'inline';
    } else {
        document.querySelector('.indicator.down').style.display = 'inline';
    }
    } catch (error) {
      console.error("Error fetching prediction:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <div class="header">
        <img src={logo} alt="Logo" />
        <h1>PreviewCom</h1>
      </div>
      <div class="container">
        <div class="title">
          <h2>Commodity Predictor</h2>
        </div>
        <div id="predictor" class="tab-content active">
          <div class="parameters">
            <div class="parameter">
              <label htmlFor="humidity">Humidity</label>
              <i className="fas fa-tint icon"></i>
              <select
                id="humidity"
                name="humidity"
                value={humidity}
                type="number"
                onChange={(e) => setHumidity(e.target.value)}
              >
                <option value="10">10-20%</option>
                <option value="20">20-30%</option>
                <option value="30">30-40%</option>
                <option value="40">40-50%</option>
                <option value="50">50-60%</option>
                <option value="60">60-70%</option>
                <option value="70">70-80%</option>
                <option value="80">80-90%</option>
                <option value="90">90-100%</option>
              </select>
            </div>
            <div className="parameter">
              <label htmlFor="temperature">Temperature</label>
              <i className="fas fa-thermometer-half icon"></i>
              <input
                type="number"
                step="0.1"
                id="temperature"
                name="temperature"
                placeholder="°C"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
              />
            </div>
            <div className="parameter">
              <label htmlFor="location">Location</label>
              <i className="fas fa-map-marker-alt icon"></i>
              <select
                id="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="south-america">South America</option>
                <option value="asia">Asia</option>
                <option value="africa">Africa</option>
              </select>
            </div>
            <div className="parameter">
              <label htmlFor="commodity">Type of Commodity</label>
              <i className="fas fa-cube icon"></i>
              <select
                id="commodity"
                name="commodity"
                value={commodity}
                onChange={(e) => setCommodity(e.target.value)}
              >
                <option value="coffee">Coffee</option>
              </select>
            </div>
          </div>
          <div class="result">
            <button onClick={handleAnalyzeClick}>
              <i class="fas fa-chart-line"></i> Analyze
            </button>

            <div class="loading">Analyzing...</div>
            <div class="indicator up">↑</div>
            <div class="indicator down">↓</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const handleAnalyzeClick = () => {
  playAudio();
  analyzeData();
};
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    tab.classList.add("active");
    document
      .getElementById(tab.getAttribute("data-tab"))
      .classList.add("active");
  });
});

const playAudio = () => {
  const audio = document.getElementById("myAudio");
  audio.play();
};

//parte de

export default App;
