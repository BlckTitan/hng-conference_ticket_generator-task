'use client'
import React, { useEffect, useState } from 'react'
import NavigationStep from '../components/NavigationStep';
import { BsCalendar2Date, BsFillGeoFill, BsFillPersonFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { changeStep } from '@/app/GlobalRedux/progressSlice/progressSlice';
import { upload } from '@/lib/upload';

export default function Ticket() {

    const dispatch = useDispatch()
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [ticketType, setTicketTye] = useState('')
    const [specialRequest, setSpecialRequest] = useState('')
    const [profilePhoto, setProfilePhoto] = useState('')
   const [numberOfTickets, setNumberOfTickets] = useState(0)

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

        setName(localStorage.getItem('name'))
        setTicketTye(localStorage.getItem('ticketType'))
        setEmail(localStorage.getItem('email'))
        setSpecialRequest(localStorage.getItem('specialRequest'))
        setNumberOfTickets(localStorage.getItem('numberOfTickets'))
        setProfilePhoto(localStorage.getItem('profilePhoto'))

    }, [name, email, profilePhoto, specialRequest, ticketType])

    console.log(name, email, profilePhoto, specialRequest, ticketType)

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
                            <div className='w-32 h-32 my-2 flex justify-center items-center bg-white rounded-lg'>

                                {(profilePhoto) ? 
                                    <img 
                                        src={profilePhoto} 
                                        alt="profile avatar" 
                                        aria-label='profile avatar'
                                    /> : 

                                    <BsFillPersonFill className='text-8xl text-backgroundGreenLight' />
                                } 
                            </div>

                            <div className='attendee-ticket-details border border-borderGreen w-full rounded-lg'>
                                <div className='flex'>
                                    <div className="text-wrap w-1/2 border-r border-b border-borderGreen p-2">{name}</div>
                                    <div className="text-wrap w-1/2 border-b border-borderGreen p-2">{email}</div>
                                </div>

                                <div className='flex'>
                                    <div className="text-wrap w-1/2 border-r border-b border-borderGreen p-2">VIP</div>
                                    <div className="text-wrap w-1/2 border-b border-borderGreen p-2">{numberOfTickets}</div>
                                </div>

                                <div className="w-full border-borderGreen p-2">
                                    {(typeof(specialRequest) === undefined) ? specialRequest : 'No special requests'}
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
