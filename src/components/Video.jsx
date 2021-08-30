import React from "react";

export default function Navbar() {
  return (
      <video controls>
          <source src={this.props.location.videoPath}/>
      </video>
  );
}