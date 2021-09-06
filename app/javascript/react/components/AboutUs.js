import React from 'react'

// Component to display the About page for the farm
export const AboutUs = (props) => {
  return (
    <div id="about-us">
      <h1 className="title">About Us</h1>
      <div className="content">
        <p>
          The name Ramshackle Farm was inspired by one of my favorite folk punk bands.
          Sometimes when you're dealing with late stage capitalism, the climate crisis, 
          and a global pandemic, you just need to scream along to good music in your car.
          And then sometimes you need to sell your house, quit your job, move across the country,
          and start a farm. So here we are.
          <br></br>
          <br></br>
          Ramshackle Farm is a 5 acre family farm featuring a 5000sf chemical free hydroponic facility and a 1 acre mixed vegetable market garden. 
          <br></br>
          <br></br>
        </p>
        <div className="list">
          <ul>
            We are:
            <li>Farming in a human scale</li>
            <li>Committed to food sovereignty</li> 
            <li>Educating tiny farmers</li>
            <li>Embracing the community</li>
            <li>Punk Rock</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutUs