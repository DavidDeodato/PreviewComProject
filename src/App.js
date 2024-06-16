import logo from '/Users/Inteli/Desktop/PreviewComProject/src/assets/LogoPreviewCom.png';

function App() {
  return (
    <div className="App">

     <audio id="myAudio" src="/click-button.mp3"></audio>

      <head>
    <title>Commodity Price Predictor</title>
</head>

<body>

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
                    <label for="humidity">Humidity</label>
                    <i class="fas fa-tint icon"></i>
                    <select id="humidity" name="humidity">
                        <option value="10-20">10-20%</option>
                        <option value="20-30">20-30%</option>
                        <option value="30-40">30-40%</option>
                        <option value="40-50">40-50%</option>
                        <option value="50-60">50-60%</option>
                        <option value="60-70">60-70%</option>
                        <option value="70-80">70-80%</option>
                        <option value="80-90">80-90%</option>
                        <option value="90-100">90-100%</option>
                    </select>
                </div>
                <div class="parameter">
                    <label for="temperature">Temperature</label>
                    <i class="fas fa-thermometer-half icon"></i>
                    <input type="number" step="0.1" id="temperature" name="temperature" placeholder="°C" />
                </div>
                <div class="parameter">
                    <label for="location">Location</label>
                    <i class="fas fa-map-marker-alt icon"></i>
                    <select id="location" name="location">
                        <option value="south-america">South America</option>
                        <option value="asia">Asia</option>
                        <option value="africa">Africa</option>
                    </select>
                </div>
                <div class="parameter">
                    <label for="commodity">Type of Commodity</label>
                    <i class="fas fa-cube icon"></i>
                    <select id="commodity" name="commodity">
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

</body>




    </div>
  );
}


          


           

            const handleAnalyzeClick = () => {
                playAudio();
                analyzeData();
            };
              const tabs = document.querySelectorAll('.tab');
              const contents = document.querySelectorAll('.tab-content');

              tabs.forEach(tab => {
                  tab.addEventListener('click', () => {
                      tabs.forEach(t => t.classList.remove('active'));
                      contents.forEach(c => c.classList.remove('active'));

                      tab.classList.add('active');
                      document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
                  });
              });

              
                const playAudio = () => {
                    const audio = document.getElementById('myAudio');
                    audio.play();
                  };

        

        function analyzeData() {
            document.querySelector('.loading').style.display = 'block';
            document.querySelector('.indicator.up').style.display = 'none';
            document.querySelector('.indicator.down').style.display = 'none';

            setTimeout(() => {
                document.querySelector('.loading').style.display = 'none';

                // Randomly simulate increase or decrease for demonstration
                let increase = Math.random() > 0.5;
                if (increase) {
                    document.querySelector('.indicator.up').style.display = 'inline';
                } else {
                    document.querySelector('.indicator.down').style.display = 'inline';
                      }
                  }, 2000);

                  const handleAnalyzeClick = () => {
                    playAudio();
                    analyzeData();
                  };
              }

             


//parte de 
        
    
      

export default App;
