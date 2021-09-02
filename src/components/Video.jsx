import React from "react";
import { useLocation } from "react-router";

export default function Video() {
  const location = useLocation()
  
  console.log(location)
  return (
      
      <video width="1200" height="1000" controls>
          <source src={location.state.videoPath}/>
      </video>
  );
}

