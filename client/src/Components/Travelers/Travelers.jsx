import React from 'react'

// Importing Image ======>
import tokyo from "../../assets/tokyo.jpg"
import paris from "../../assets/paris.jpg"
import dubai from "../../assets/dubai.jpg"
import india from "../../assets/india.jpg"

// we are going to use higher order array method called map to display all the data=========>

const travelers = [
  {
    id: 1,
    destinationImage: tokyo,
    travelerImage: tokyo,
    travelerName: 'Mark',
    socialLink: '@markKovidser'
  },
  {
    id: 2,
    destinationImage: paris,
    travelerImage: paris,
    travelerName: 'Vikas',
    socialLink: '@vikasKovidser'
  },
  {
    id: 3,
    destinationImage: dubai,
    travelerImage: dubai,
    travelerName: 'dilansh',
    socialLink: '@its_dilansh'
  },
  {
    id: 4,
    destinationImage: india,
    travelerImage: india,
    travelerName: 'Tushar',
    socialLink: '@gov_Tushar(babu)'
  }
]

const Travelers = () => {
  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2>Top travelers of this month!!!</h2>

        <div className="travelersContainer grid">

          {
            travelers.map(({id,destinationImage,travelerImage,travelerName,socialLink }) => {
              return (
                // Single Passenger Card 
                <div key={id} className="singleTraveler">
                  <img src={destinationImage} className='destinationImage' />
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className='travelerImage' />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>

    </div>
  )
}

export default Travelers