import React from 'react'
import Progress from './Progress'

export default function NavigationStepComponent(props) {

  return (
    <header className="header w-full md:h-12">

    <div className="w-full flex justify-between items-center">
      <h1 className="md:text-3xl">{props.title}</h1>
      <h6 className="">Step {props.step}</h6>
    </div>

    <div className="w-full h-1 bg-borderGreen mt-1 relative rounded-full">

      <Progress now={props.now} />

    </div>

  </header>

  )
}
