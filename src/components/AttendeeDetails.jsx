'use client'

import React, { useEffect, useState } from 'react'
import NavigationStep from '../components/NavigationStep';
import { Form, InputGroup } from 'react-bootstrap';
import { BsCloudArrowUp } from 'react-icons/bs';
import { nextStep, prevStep } from '@/app/GlobalRedux/progressSlice/progressSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getEmail, getName, getSpecialRequest } from '@/app/GlobalRedux/ticketSlice/ticketSlice';
import { upload } from '../lib/upload'


export default function AttendeeDetails() {

    // const [now, setNow] = useState('8/12')
    const dispatch = useDispatch()

    const step = useSelector((state) => state.currentStepData)
    const data = useSelector((state) => state.ticketData)

    const [stepCount, setStepCount] = useState('1/3')
    const [stepTitle, setStepTitle] = useState('Ticket Selection')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [specialRequest, setSpecialRequest] = useState()
    const [url, setUrl] = useState('')
    const [imageData, setImageData] = useState('')
  
    // tracking the form steps
    useEffect(() => {
        
      if (step.step === 2) {
        setStepCount('2/3')
        setStepTitle('Attendee Details')
      }

    }, [stepCount, stepTitle])

    const handleImgUpload = async (e) =>{
        const file = await e.target.files;
        // checking file size and file type
        if(file !== '' && file[0].size < 1024 * 1024 && file[0].type.startsWith('image/')){
            setImageData(file[0])
            setUrl(URL.createObjectURL(file[0]))
        }
    }

     const handleSubmit = async() =>{

        try {

            const uploadData = await upload(imageData)
            
            localStorage.setItem('name', data.name);
            localStorage.setItem('ticketType', data.ticketType);
            localStorage.setItem('email', data.email);
            localStorage.setItem('numberOfTickets', data.numberOfTickets);
            localStorage.setItem('specialRequest', data.specialRequest);
            localStorage.setItem('profilePhoto', uploadData[0].value.secure_url);

            dispatch(nextStep())

        } catch (error) {
            throw error
        }
        
    }
    

  return (
    <div className=''>
        
        <NavigationStep title='Attendee Details' step='2/3'/>

        {/* form progress bar */}
        <div className="w-full h-1 bg-borderGreen mt-1 relative rounded-full">
            <div className='w-8/12 h-1 bg-backgroundGreenLight rounded-full absolute top-0'></div>
        </div>

        <main className="main-content w-full md:!h-fit md:border border-borderGreen md:p-8 mt-6">

            <h2 className='mb-2'>Upload Profile Photo</h2>

            {/* <Form noValidate validated={validated} onSubmit={handleSubmit}> */}
            <section className="w-full md:max-w-xl h-fit md:h-36 flex justify-center items-center border border-borderGreen rounded-3xl md:p-6" >

                <div className="w-full h-full flex flex-col justify-center items-center p-3 md:p-0 bg-backgroundGreen rounded-full md:rounded-lg relative">
                    
                    <Form.Group controlId="upload" className="mb-2 hidden">
                        <Form.Control 
                            type="file" 
                            accept='image/*'
                            onChange={(e) => { handleImgUpload(e)}}
                            required
                        />
                    </Form.Group>

                    <Form.Label 
                        htmlFor='upload' 
                        aria-label="File upload button"
                        className='w-full md:w-48 h-40 md:absolute text-center flex flex-col justify-center items-center rounded-lg border-2 border-backgroundGreenLight'
                        style={{backgroundColor: '#0E464F'}}
                    >
                        <span className='text-center'>
                            <BsCloudArrowUp className='text-3xl'/>
                        </span>
                        Drag & drop or click to upload
                    </Form.Label>

                    <div className='w-full h-full'
                        style={{backgroundColor: '#030303'}}>
                        {url &&
                            <img src={url} className='w-full h-full object-cover'/>
                        }
                    </div>

                </div>

            </section>

            <div className="w-full h-1 my-6 bg-borderGreenDark rounded-full"></div>

            <section>
                <div className="">

                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Large text" 
                            aria-label="Enter your name"
                            className='w-full h-10 mt-2 p-2 bg-transparent border border-borderGreen rounded-lg'
                            value={name}
                            onChange={(e) => (setName(e.target.value), dispatch(getName(e.target.value)))}
                        />
                    </Form.Group>
                
                </div>

                <div>
                    <InputGroup className="mb-2">

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
                            value={email}
                            onChange={(e) => (setEmail(e.target.value), dispatch(getEmail(e.target.value)))}
                        />
                    </InputGroup>
                    
                </div>

                <div>
                    <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Special request?</Form.Label>
                        <Form.Control 
                            aria-label="Enter your special requests"
                            as="textarea" 
                            rows={4} 
                            className='w-full mt-2 bg-transparent border border-borderGreen rounded-lg'
                            value={specialRequest}
                            onChange={(e) => (setSpecialRequest(e.target.value), dispatch(getSpecialRequest(e.target.value)))}
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
                    onClick={() => dispatch(prevStep())}
                >
                    Back
                </button>

                <button 
                    type="button" 
                    className="bg-backgroundGreenLight"
                    aria-label="Next step"
                    onClick={() => handleSubmit()}
                >
                    Get My Ticket
                </button>

            </div>
      </main>

    </div>
  )
}
