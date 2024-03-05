import React from 'react';
import './App.css';

function App() {

  return (
    <div className="outer_container">
      <main className="card_container">
        <div className="sedan_container car_container">
          <img src="/column-preview-card/icon-sedans.svg" alt="Sedan" />
          <h2>Sedans</h2>
          <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>

          <button className="learn_more">Learn More</button>
        </div>

        <div className="suv_container car_container">
          <img src="/column-preview-card/icon-suvs.svg" alt="SUV" />
          <h2>SUVS</h2>
          <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>

          <button className="learn_more">Learn More</button>
        </div>

        <div className="luxury_container car_container">
          <img src="/column-preview-card/icon-luxury.svg" alt="Luxury" />
          <h2>Luxury</h2>
          <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>

          <button className="learn_more">Learn More</button>
        </div>
      </main>
    </div>
  )
}

export default App;
