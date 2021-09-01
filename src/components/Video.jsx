import React from "react";
import { useLocation } from "react-router";
export default function Video() {
  const location = useLocation()
  console.log(location.state)
  return (
    
      <video controls>
          <source src={location.state.videoPath}/>
      </video>
  );
}

