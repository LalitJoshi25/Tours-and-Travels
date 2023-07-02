import React from 'react'

// Importing Image =========>
import lounge from "../../assets/lounge.png"

const Lounge = () => {
  return (
    <div className='lounge container section'>
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={lounge} />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>

          <div className="grids grid">

            <div className="singleGrid">
              <span className='gridTitle'>
                Help through the airport
              </span>
              <p>
                You can also airlines from your phone and book a flight ticket to one of your favourite destination.
              </p>
            </div>

            <div className="singleGrid">
              <span className='gridTitle'>
                Priority Boarding
              </span>
              <p>
                You can also airlines from your phone and book a flight ticket to one of your favourite destination.
              </p>
            </div>

            <div className="singleGrid">
              <span className='gridTitle'>
                Care on the flight
              </span>
              <p>
                You can also airlines from your phone and book a flight ticket to one of your favourite destination.
              </p>
            </div>

            <div className="singleGrid">
              <span className='gridTitle'>
                Chauffeur-drive service
              </span>
              <p>
                You can also airlines from your phone and book a flight ticket to one of your favourite destination.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Lounge
