import React from 'react';
import { car2 } from '../data/details';
import CountUp from "react-countup"



export default function Cardetails() {
  return (
    <>
      <section className="car-details-section">
        <div className="container">
          
          <div className="car-b">
            {car2.map((carItem) => (
              <div className="car">
                <div className="car-logo">
                  <img src={carItem.logo} alt={carItem.name} className="car-logo" />
                </div>
                  <div key={carItem.id} className="car-card">
                
                <div className="car-img">
                  <img src={carItem.img} alt={carItem.name} className="car-image" />
                </div>
                <div className="car-name">
                  <h2>{carItem.name}</h2>
                </div>
                 
               <div className="car-details">
                  <div className="engine">
                    <img src="./img/engine.png" alt="" className='engine' />
                    <p><strong>Engine:</strong> {carItem.Engine}</p>
                  </div>
                  <div className="engine">
                    <img src="./img/power.png" alt="" className='hp' />
                    <p><strong>Horsepower:</strong> <CountUp enableScrollSpy duration={2} end={carItem.Hp} /></p>
                  </div>
                  <div className="engine">
                    <img src="./img/doller.png" alt="" className='price' />
                    <p>
                      <strong>Price:</strong>{' '}
                      <CountUp enableScrollSpy duration={2} end={carItem.price} />
                    </p>
                  </div>
                </div>
              
              
                  
               
              </div>
              <a href={carItem.link} target="_blank" rel="noopener noreferrer" >
                  -Wikipedia
                  </a>

              </div>
              
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
