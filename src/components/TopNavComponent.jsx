import React from 'react'
import { BsArrowRight, BsTicketPerforated } from 'react-icons/bs';
import logo from '../../public/img/logo-transparent.png'

export default function TopNavComponent() {
  return (
    <div className='w-full md:max-w-7xl h-16  p-4 mt-4 border border-borderGreen rounded-xl md:rounded-2xl'>
        
      <nav className=' w-full h-full flex justify-between items-center relative'>
        <div className='logo'>
          <span className='text-white text-xl'><BsTicketPerforated /></span>
        </div>
        <div className='links hidden xl:inline-block'>
          <a href="/events">Events</a>
          <a href="/myTicket">My Tickets</a>
          <a href="/about">About Project</a>
        </div>
        <div className='tickets'>
          <a href="http://#" className='bg-white py-1 text-borderGreen w-32 md:w-40 h-12 flex justify-center items-center rounded-xl font-semibold'>
            <span className=''>My Tickets</span>
            <span className='ml-2 my-auto'>
              <BsArrowRight />
            </span>
          </a>
        </div>
      </nav>

    </div>
  )
}
