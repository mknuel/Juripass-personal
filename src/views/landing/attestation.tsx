import React from 'react'

import quote from '../../../src/assets/icons/quote.png'
import { testimonials } from '../../constants/testimonials'

const Attestation = () => {
  return (
      <div className='attestation'>
          <h2>Attestation</h2>
          <p>These are what leading figures in the legal industry have to say about Juripass's cutting-edge solution.</p>
          {testimonials.map((testimonials) => (
              <div className='card-grid'>
                  <div className='a-card'>
                    <div className='quote'>
                        <img src={quote} alt="" />
                    </div>
                    <div className='flex'>
                            <img src={testimonials.image} className='ownerImage' alt="" />
                            <div className='owner'>
                                <h4>{testimonials.owner}</h4>
                                <p>{testimonials.profession}</p>
                            </div>
                    </div>
                    <div className='testi'>
                        <p>{ testimonials.testimony }</p>
                    </div>
                </div>
              </div>
            
          ))}
      </div>
  )
}

export default Attestation