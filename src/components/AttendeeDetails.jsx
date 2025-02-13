'use client'

import React, { useState } from 'react'
import NavigationStep from '../components/NavigationStep';
import { Form, InputGroup } from 'react-bootstrap';
import { BsCloudArrowUp, BsEnvelopeAt } from 'react-icons/bs';

export default function AttendeeDetails() {

    const [now, setNow] = useState('8/12')

  return (
    <div className='selection p-6 md:p-12 bg-backgroundGreen border border-borderGreen mt-8'>
        
        <NavigationStep now={now} title='Attendee Details' step='2/3'/>

        <main className="main-content w-full md:border border-borderGreen md:p-10 mt-6">

            {/* <Form noValidate validated={validated} onSubmit={handleSubmit}> */}
            <section className="w-full md:max-w-xl h-fit md:h-36 flex justify-center items-center border border-borderGreen rounded-3xl md:p-6" >
           
                <div className="avatar w-full h-full flex flex-col justify-center items-center bg-backgroundGreen relative">
                    
                    <Form.Group controlId="formFile" className="mb-3 hidden" id='upload'>
                        <Form.Control type="file" />
                    </Form.Group>

                    <Form.Label 
                        htmlFor='upload' 
                        aria-label="File upload button"
                        className='w-full md:w-48 h-40 absolute text-center flex flex-col justify-center items-center rounded-lg bg-backgroundGreenLight border border-borderGreen'
                    >
                        <span className='text-center'>
                            <BsCloudArrowUp className='text-3xl'/>
                        </span>
                        Drag & drop or click to upload
                    </Form.Label>

                </div>

            </section>

            <div className="w-full h-1 my-6 bg-borderGreenDark rounded-full"></div>

            <section>
                <div className="">

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Large text" 
                            aria-label="Enter your name"
                            className='w-full h-10 mt-2 p-2 bg-transparent border border-borderGreen rounded-lg'
                        />
                    </Form.Group>
                
                </div>

                <div>
                    <InputGroup className="mb-3">

                        {/* <InputGroup.Text id="basic-addon1">
                            <BsEnvelopeAt/>
                        </InputGroup.Text> */}
                        <Form.Label>Enter your email*</Form.Label>
                        <Form.Control
                            type="email " 
                            placeholder="Email"
                            aria-label="Enter your email address"
                            aria-describedby="basic-addon1"
                            required 
                            className='w-full h-10 mt-2 p-2 bg-transparent border border-borderGreen rounded-lg'
                        />
                    </InputGroup>
                    
                </div>

                <div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Special request?</Form.Label>
                        <Form.Control 
                            aria-label="Enter your special requests"
                            as="textarea" 
                            rows={4} 
                            className='w-full mt-2 bg-transparent border border-borderGreen rounded-lg'
                        />
                    </Form.Group>
                </div>
            </section>

            {/* </Form> */}

            {/* form navigation  */}
            <div className="form-navigation">
                <button 
                    type="button" 
                    className="text-backgroundGreenLight border border-borderGreen mb-2 md:mb-0"
                    aria-label="Cancel ticket purchase" 
                >Back</button>
                <button 
                    type="button" 
                    className="bg-backgroundGreenLight"
                    aria-label="Next step" 
                >Get My Ticket</button>
            </div>
      </main>

    </div>
  )
}
