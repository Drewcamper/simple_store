import React from 'react'
import { MicroPlate } from "./microPlate";
import './ui/board.css'

export default function DispenserPage() {
  return (
    <div className='dispenser'>
        <MicroPlate />
        <MicroPlate />
        <MicroPlate />
    </div>
  )
}
