import React from 'react'
import FacebookIcon from 'images/facebook-icon.svg'
import InstagramIcon from 'images/instagram-icon.svg'

export const BottomBar = () => {
  return (
    <div id="bottom-bar">
      <p>Connect with us online:</p>
      <a href = "mailto: ramshacklefarmers@gmail.com">ramshacklefarmers@gmail.com</a>
      <a href = "https://www.instagram.com/ramshackle_farm/"><img src={InstagramIcon} alt="Instagrom"></img></a>
      <a href = "https://www.facebook.com/Ramshackle-Farm-101301622220467"><img src={FacebookIcon} alt="Facebook"></img></a>
    </div>
  )
}

export default BottomBar