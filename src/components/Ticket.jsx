'use client'
import React, { useEffect, useState } from 'react'
import NavigationStep from '../components/NavigationStep';
import { BsCalendar2Date, BsFillGeoFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { changeStep } from '@/app/GlobalRedux/progressSlice/progressSlice';
import { upload } from '@/lib/upload';

export default function Ticket() {

    const dispatch = useDispatch()

    const step = useSelector((state) => state.currentStepData)

    const [stepCount, setStepCount] = useState('1/3')
    const [stepTitle, setStepTitle] = useState('Ticket Selection')

    // tracking form steps
    useEffect(() => {
        if (step.step === 3) {
            setStepCount('3/3')
            setStepTitle('Ready')
        }

    }, [stepCount, stepTitle])

    // getting user ticket data
    useEffect(() => {
        localStorage.setItem('name', data.name);
        localStorage.setItem('ticketType', data.ticketType);
        localStorage.setItem('email', data.email);
        localStorage.setItem('specialRequest', data.specialRequest);
        localStorage.setItem('profilePhoto', uploadData[0].value.secure_url);

    })
  return (
    <div>
        
        <NavigationStep title='Ready' step={'3/3'}/>

        {/* form progress bar */}
        <div className="w-full h-1 bg-borderGreen mt-1 relative rounded-full">
            <div className='w-full h-1 bg-backgroundGreenLight rounded-full absolute top-0'></div>
        </div>


        <main className="main-content w-full md:!h-fit md:border border-borderGreen md:p-8 mt-6">

            <div className='flex flex-col items-center'>
                <h1 className='text-3xl font-medium text-center '>Your Ticket is Booked</h1>
                <p className='my-2 text-center'>Check your email for a copy or you can download</p>

                <div className='ticket-display w-full h-fit mt-4 display flex justify-center'>
                    <div className='ticket border border-borderGreen relative p-2 md:p-4'>

                        <div className='w-full h-fit p-2 flex flex-col items-center border border-borderGreen rounded-md'>

                            {/* about event */}
                            <div className="about">
                                <h1 className='text-xl md:text-2xl font-medium'>Techember Fest "25</h1>
                                <p className="flex justify-center items-center mt-2">
                                    <span className="text-red-500 mr-1">
                                        <BsFillGeoFill />
                                    </span>
                                    04 Rumens road, Ikoyi Lagos
                                </p>
                                <p className="flex justify-center items-center mt-2">
                                    <span className="text-white mr-1">
                                        <BsCalendar2Date />
                                    </span>
                                    March 15, 2025 | 7:00 PM
                                </p>
                            </div>

                            {/* avatar */}
                            <div className='w-32 h-32 my-2 bg-white rounded-lg'>
                                <img src={null} alt="" />
                            </div>

                            <div className='attendee-ticket-details border border-borderGreen w-full rounded-lg'>
                                <div className='flex'>
                                    <div className="text-wrap w-1/2 border-r border-b border-borderGreen p-2">Avi Chukwu</div>
                                    <div className="text-wrap w-1/2 border-b border-borderGreen p-2"> User@email.com</div>
                                </div>

                                <div className='flex'>
                                    <div className="text-wrap w-1/2 border-r border-b border-borderGreen p-2">VIP</div>
                                    <div className="text-wrap w-1/2 border-b border-borderGreen p-2">1</div>
                                </div>

                                <div className="w-full border-borderGreen p-2">
                                    Nil? Or the users sad story they write in there gets this whole space, Max of three rows
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* form navigation  */}
            <div className="form-navigation">
                
                <button 
                    type="button" 
                    className="text-backgroundGreenLight border border-borderGreen mb-2 md:mb-0"
                    aria-label="Cancel ticket purchase" 
                    onClick={() => dispatch(changeStep(2))}
                >
                    Book Another Ticket
                </button>

                <button 
                    type="button" 
                    className="bg-backgroundGreenLight"
                    aria-label="Download step" 
                >
                    Download Ticket
                </button>

            </div>
      </main>

    </div>
  )
}
