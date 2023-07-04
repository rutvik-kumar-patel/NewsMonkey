import React from 'react';
import Magnify from'./Magnify.gif'

const Spinner = ()=>{
    return (
      <div className='text-center'>
        <img className="my-3" src={Magnify} alt="Magnify" />
      </div>
    )
}

export default Spinner