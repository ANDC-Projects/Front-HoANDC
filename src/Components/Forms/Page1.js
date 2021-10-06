import React from 'react';
import { Link } from "react-router-dom";
export const Page1 = () => {
  return(
      <div className='text-center'>
        Page 1
        <br />
        <button type='button' className="btn btn-outline-danger ">
          <Link to='/Form/page2'>Next</Link>
        </button>
      </div>
  )
}
