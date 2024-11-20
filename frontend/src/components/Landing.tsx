import { useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    const [name, setName] = useState("");
  return (
    <>
    <h1>Join Video Calling Room</h1>
    <input type="text" placeholder="Enter your name" onChange={(e) => 
        setName(e.target.value)}>
    </input>
    <Link to={`/room/?name=${name}`}>
        Join
    </Link>
    </>
  )
}

export default Landing