import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className='landing'>
        <Link to='/home'>
          <button>
            Home
          </button>
        </Link>
    </div>
  );
};



export default Landing;
