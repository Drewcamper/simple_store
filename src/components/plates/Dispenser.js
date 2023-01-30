import React from 'react'
import { FirstMicroPlate } from "./firstMicroPlate";
import { SecondMicroPlate } from './secondMicroPlate';
import { ThirdMicroPlate } from './thirdMicroPlate';
import '../ui/board.css'

export default function DispenserPage() {
  return (
    <div className='dispenser'>
      <div className='dispenserWrapper'>
        <div className=''>        
          <FirstMicroPlate />
          <SecondMicroPlate />
          <ThirdMicroPlate />    
        </div>
    
      </div>
      
        
    </div>
  )
}
