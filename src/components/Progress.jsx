import React, { useEffect, useState } from 'react'

export default function Progress(now) {
  
  
  const [step, setStep] = useState('')
  
  useEffect(() => {
    setStep(now.now)
  }, [now])

  return (
    <div className={`w-${step} h-1 bg-backgroundGreenLight rounded-full mt-1 absolutetop-0`}>
      
    </div>
  )
}
