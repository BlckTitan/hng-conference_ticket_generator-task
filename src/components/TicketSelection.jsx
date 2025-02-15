import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import AboutEvent from '@/components/AboutEvent'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep } from '@/app/GlobalRedux/progressSlice/progressSlice'
import NavigationStepComponent from './NavigationStep'
import { getEmail, getName, getNumberOfTickets, getSpecialRequest, getticketType } from '@/app/GlobalRedux/ticketSlice/ticketSlice'

export default function TicketSelection() {

  const dispatch = useDispatch()

  const step = useSelector((state) => state.currentStepData)
  const data = useSelector((state) => state.ticketData)

  const [stepCount, setStepCount] = useState('1/3')
  const [stepTitle, setStepTitle] = useState('Ticket Selection')
  const [ticketType, setTicketType] = useState('')
  const [errorType, setErrorType] = useState('')

   useEffect(() => {
      if (step.step === 1) {
        setStepCount('1/3')
        setStepTitle('Ticket Selection')
      }
      
  }, [stepCount, stepTitle])

  const cancelSelection = () =>{
    dispatch(getticketType([]));
    dispatch(getNumberOfTickets(''));
    dispatch(getName(''));
    dispatch(getEmail(''));
    dispatch(getSpecialRequest(''))
  }

  const validateFields = () =>{
    if(Array.from(data.ticketType).length === 0){
      setErrorType('Please choose a ticket type')     
    }else{
      dispatch(nextStep())
    }
  }
  
  return (
    <>
      <NavigationStepComponent title={stepTitle} step={stepCount}/>
      
        {/* form progress bar */}
        <div className="w-full h-1 bg-borderGreen mt-1 relative rounded-full">
          <div className='w-4/12 h-1 bg-backgroundGreenLight rounded-full absolute top-0'></div>
        </div>


      <main className="main-content w-full md:border border-borderGreen md:p-8 mt-6">

          <Form >
            
            <AboutEvent/>

            <div className="w-full h-1 my-6 bg-borderGreenDark rounded-full"></div>

            <section>
              {/* error message */}
              <div className='flex flex-col md:flex-row md:justify-between md:item-center mb-2 md:mb-1'>
                <h1 className="mb-1 xl:mb-2">Select Ticket Type</h1>
                <span className='text-red-400 text-xs'>
                  {errorType && errorType}
                </span>
              </div>
              <div className="ticket-type-container w-full p-2 border border-borderGreen rounded-3xl">

                {/* ticket type selection */}
                <div 
                  className={
                    (ticketType === 'option1') ? 
                    'ticket-type regularAccess text-left border border-borderGreen rounded-xl active' :
                    'ticket-type regularAccess text-left border border-borderGreen rounded-xl'
                  }
                >
                  
                  <Form.Group >
                    <Form.Check
                      required
                      type='radio'
                      feedbackType="invalid"
                      id="regularAccess"
                      className="hidden"
                      aria-label="Regular access; Free; 20/52"
                      name='package'
                      value={['Regular Access', 0, '20/52']}
                      onClick={(e) => {
                        setTicketType('option1')
                        dispatch(getticketType([e.target.value]))
                      }}
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
                <div 
                  className={
                    (ticketType === 'option2') ? 
                    'ticket-type regularAccess text-left border border-borderGreen rounded-xl active' :
                    'ticket-type regularAccess text-left border border-borderGreen rounded-xl'
                  }
                >
                  
                  <Form.Group >
                    <Form.Check
                      type='radio'
                      required
                      feedbackType="invalid"
                      id="vipAccess"
                      className="hidden"
                      aria-label="VIP access; $150; 20/52"
                      name='package'
                      value={['VIP Access', 150, '20/52']}
                      onChange={(e) => {
                        setTicketType('option2')
                          dispatch(getticketType(e.target.value))
                        }
                      }
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
                <div 
                  className={
                    (ticketType === 'option3') ? 
                    'ticket-type regularAccess text-left border border-borderGreen rounded-xl active' :
                    'ticket-type regularAccess text-left border border-borderGreen rounded-xl'
                  }
                >
                  
                  <Form.Group >
                    <Form.Check
                      type='radio'
                      required
                      feedbackType="invalid"
                      id="vvipAccess"
                      className="hidden"
                      aria-label="VVIP access; $150; 20/52"
                      name='package'
                      value={['VVIP Access', 150, '20/52']}
                      onChange={(e) => {
                          setTicketType('option3')
                          dispatch(getticketType([e.target.value]))
                        }
                      }
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
                  name='ticketNumber'
                  onClick={(e) => dispatch(getNumberOfTickets(e.target.value))}
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
              onClick={() => cancelSelection()}
            >Cancel</button>

            <button 
              type="button" 
              className="bg-backgroundGreenLight"
              aria-label="Next step"
              onClick={validateFields}
            >Next</button>

          </div>
        </main>
    </>
  )
}
