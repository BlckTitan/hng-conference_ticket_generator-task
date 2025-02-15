'use client'

import { useState } from "react";
import TicketSelection from '@/components/TicketSelection'
import AttendeeDetails from '@/components/AttendeeDetails'
import Ticket from '@/components/Ticket'
import { useSelector } from "react-redux";

export default function SelectionComponent() {

  const step = useSelector((state) => state.currentStepData)

  return (
    <div className='selection p-6 md:p-12 bg-backgroundGreen border border-borderGreen mt-8'>
      
      {(step.step === 1) && <TicketSelection/>}
      {(step.step === 2) && <AttendeeDetails/>} 
      {(step.step === 3) && <Ticket/>}
    </div>
  )
}
