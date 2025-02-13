'use client'

import { useState } from "react";
import Progress from '../components/Progress';
import AboutEvent from '../components/AboutEvent'
import NavigationStep from '../components/NavigationStep'
import { Form } from "react-bootstrap";

export default function SelectionComponent() {

  const [now, setNow] = useState('4/12')
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className='selection p-6 md:p-12 bg-backgroundGreen border border-borderGreen mt-8'>
        
      <NavigationStep now={now} title='Ticket Selection' step='1/3'/>

      <main className="main-content w-full md:border border-borderGreen md:p-12 mt-8">

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          
          <AboutEvent/>

          <div className="w-full h-1 my-6 bg-borderGreenDark rounded-full"></div>

          <section>
            <h1 className="mb-2">Select Ticket Type</h1>
            <div className="ticket-type-container w-full p-2 border border-borderGreen rounded-3xl">

              {/* ticket type selection */}
              <div className="ticket-type regularAccess text-left border border-borderGreen rounded-xl active">
                
                <Form.Group >
                  <Form.Check
                    required
                    feedbackType="invalid"
                    id="regularAccess"
                    className="hidden"
                    aria-label="Regular access; Free; 20/52"
                  />
                </Form.Group>

                <label
                  htmlFor='regularAccess'
                >
                  <h1 className="font-semibold text-xl">Free</h1>
                  <h3 className="">REGULAR ACCESS</h3>
                  <span>20/52</span>
                </label>

              </div>

             {/* ticket type selection */}
              <div className="ticket-type regularAccess text-left border border-borderGreen rounded-xl">
                
                <Form.Group >
                  <Form.Check
                    required
                    feedbackType="invalid"
                    id="vipAccess"
                    className="hidden"
                    aria-label="VIP access; $150; 20/52"
                  />
                </Form.Group>

                <label
                  htmlFor='vipAccess'
                >
                  <h1 className="font-semibold text-xl">$150</h1>
                  <h3 className="">VIP ACCESS</h3>
                  <span>20/52</span>
                </label>

              </div>

              {/* ticket type selection */}
              <div className="ticket-type regularAccess text-left border border-borderGreen rounded-xl">
                
                <Form.Group >
                  <Form.Check
                    required
                    feedbackType="invalid"
                    id="vvipAccess"
                    className="hidden"
                    aria-label="VVIP access; $150; 20/52"
                  />
                </Form.Group>

                <label
                  htmlFor='vvipAccess'
                >
                 <h1 className="font-semibold text-xl">$150</h1>
                  <h3 className="">VVIP ACCESS</h3>
                  <span>20/52</span>
                  </label>

              </div>
            </div>

            <div className="ticket-number my-4">

              <h1 className="mb-2">Number of Tickets</h1>

              <Form.Select 
                aria-label="select number of tickets" 
                className="w-full border border-borderGreen bg-transparent p-3 rounded-lg"
                required
              >

                <option  defaultChecked value="1" aria-label="One tickets">1</option>
                <option value="2" aria-label="Two tickets">2</option>
                <option value="3" aria-label="Three tickets">3</option>

              </Form.Select>

            </div>
            
            {/*  */}
          </section>

        </Form>

        {/* form navigation  */}
        <div className="form-navigation">
          <button 
            type="button" 
            className="text-backgroundGreenLight border border-borderGreen mb-2 md:mb-0"
            aria-label="Cancel ticket purchase" 
          >Cancel</button>
          <button 
            type="button" 
            className="bg-backgroundGreenLight"
            aria-label="Next step" 
          >Next</button>
        </div>
      </main>

    </div>
  )
}
