import { Copy } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

// import copy from '../../../../../../src/components/icons/assets/copy.svg'

import "../../track-case.scss";

const SingleCase = ({ id }: {id: string}) => {
  return (
    <div className="case-card">
      <div className="id-container">
        <div className="id">
          <p>ID : #{id}</p>
          <Copy color="#0D294D" variant="Bold" size="18"/>
        </div>
        <p>Date Instituted : 2 secs ago</p>
      </div>
      <h1>Hessignton Oil Vs Tony Gianopolis Coworking Office</h1>
          <div className="buttons">
        <Link to='/'>
        <button>View Details</button>
        </Link>
              <div className='state'>
                <span>Approved</span>
              </div>
          </div>
    </div>
  );
};

export default SingleCase;
