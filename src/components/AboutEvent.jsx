'use client'

import { BsFillGeoFill } from "react-icons/bs"

export default function AboutEventComponent() {

  return (
    
    <section className="w-full md:max-w-xl h-fit md:h-48 flex justify-center items-center border border-borderGreen rounded-3xl p-3 md:p-6" >
    
      <div className="about-event w-full md:w-3/4 flex flex-col justify-between items-center">
          <h1>Techember Fest "25</h1>
          <p className="text-center">Join us for an unforgettable experience at Techember Fest! Secure your spot now.</p>
          <p className="flex items-center mt-2">
          <span className="text-red-500">
              <BsFillGeoFill />
          </span>
          The Tech Place Port Harcourt, Rivers State. || March 15, 2025 | 7:00 PM
          </p>
      </div>

    </section>

  )
}
