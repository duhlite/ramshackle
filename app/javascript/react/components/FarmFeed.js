import React from 'react'
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

// Component to display the Instagram feed for the farm
export const FarmFeed = (props) => {
  const accessToken = "IGQVJWdUZAVX0FfZAGktNjNNNGl6aVd4ZAVRUb25PMFYtYW1ZAZA1BPR2l6YWVmS3BBUGZAqenEzbjFBVkpKRlpsTm9vUlNPMXBEUGZAQd2RRaFRNLW5CcGRvbFV2dFRSYnN2V1pVbXY5eGNtTDVTMnhTelI0MAZDZD"
  return (
    <div id="farm-feed">
      <h1 className="title"> Farm Feed</h1>
      <div className="content">
        <InstagramFeed token={accessToken}  counter="3"/>  
      </div>
    </div>
  )
}

export default FarmFeed