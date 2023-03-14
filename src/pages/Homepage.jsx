import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';
import productive from '../assets/productive.webp';
import productivity from '../assets/productivity.png';


const Homepage = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
       
        <div
            className=" rounded-2xl md:w-10/12 p-4 m-4"
          >
            <div className="flex justify-between items-center ">
            <img
                  className="w-20 h-20"
                  src={productivity}
                  alt="user-profile"
                />
              <div className="text-white font-extrabold text-4xl ml-4 pl-4 uppercase" style={{ color: currentColor }}>Productive
              <p className= "text-xl mt-4 ml font-thinc capitalize"> Identify the essential. Eliminate the rest. </p>
              </div>
              <div>
                <img
                  className="w-100 h-100"
                  src={productive}
                  alt="user-profile"
                />
              </div>
            </div>

          </div>
    
      </div>
    </div>
  );
};

export default Homepage;
