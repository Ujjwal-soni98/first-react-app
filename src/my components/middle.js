import React from 'react'
import userimage from '../images/user-image.jpeg'
export default function middle() {
  return (
    <div>
        <h2>I am the middle component</h2>
        <img src={userimage} className="user-image"></img>
    </div>
  )
}

