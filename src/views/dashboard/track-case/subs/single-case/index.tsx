import { Copy } from "iconsax-react";
import React from "react";

// import copy from '../../../../../../src/components/icons/assets/copy.svg'

import "../../track-case.scss";

const SingleCase = () => {
  return (
    <div className="case-card">
      <div className="id-container">
        <div className="id">
          <p>ID : #2354</p>
          <Copy color="#0D294D" variant="Bold" size="18"/>
        </div>
        <p>Date Instituted : 2 secs ago</p>
      </div>
      <h1>Hessignton Oil Vs Tony Gianopolis Coworking Office</h1>
          <div className="buttons">
              <button>View Details</button>
              <div className='state'>
                <span>Approved</span>
              </div>
          </div>
    </div>
  );
};

export default SingleCase;
