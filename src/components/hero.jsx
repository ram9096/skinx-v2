import React from 'react'

const Hero = () => {
  return (
    <section>
        <div className='h-[200vh] text-black text-center'>
          <div >
            <h1 className='text-[6rem]   font-bold p-7'>Just Scan  <br /> the Fear</h1>
            <p className='mb-7 '>"Early detection is key to treatment success, and with a skin disease detector, <br /> we bring the expertise of dermatology into the hands of every individual."</p>
            
            <a href="https://teachablemachine.withgoogle.com/models/Y1x-xHMdd/" className=' h-[12vh]  bg-black text-white rounded-[50px] p-3 pl-4 pr-4 mt-[10px] mb-5 '>Scan Now</a>
            <img src="./assets/iphone.png" className='lg:ml-[350px] lg:mt-[135px] mr-[150px] mt-[90px]' alt="" />

          </div>
          <div className='bg-zinc  h-[90vh] rounded-lg lg:mt-[5px] align-middle text-white text-center '>
              
              
          </div>

        </div>

    </section>
  )
}

export default Hero