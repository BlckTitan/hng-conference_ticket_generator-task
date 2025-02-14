import React from 'react';
import Progress from './Progress';

export default function NavigationStepComponent(props) {

  return (
    <header className="header w-full md:h-10">

    <div className="w-full flex justify-between items-center">
      <h1 className="md:text-2xl">{props.title}</h1>
      <h6>Step {props.step}</h6>
    </div>

  </header>

  )
}
