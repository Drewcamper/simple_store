import React from 'react'
import { FirstMicroPlate } from "./firstMicroPlate";
import './ui/board.css'

export default function DispenserPage() {
  return (
    <div className='dispenser'>
      <div className='dispenserWrapper'>
        <div className=''>        
          <FirstMicroPlate />
          <FirstMicroPlate />
          <FirstMicroPlate />    
        </div>
        <div>        
          <FirstMicroPlate />
          <FirstMicroPlate />
          <FirstMicroPlate />    
        </div>
        <div>        
          <FirstMicroPlate />
          <FirstMicroPlate />
          <FirstMicroPlate />    
        </div>
      </div>
      
        
    </div>
  )
}
