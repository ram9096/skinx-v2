import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap';

const Feature = () => {
  useGSAP(()=>{
    gsap.from('#chip',{
      scrollTrigger:{
        trigger:"#chip",
        start:"20% bottom",
        toggleActions:"restart"
      },
      opacity:0,
      scale:2,
      duration:2,
      ease:'power2.inOut'
    })

  },[]);

  return (
    <section className='common-padding bg-black'>
      <div className='screen-max-width'>
        <div id='chip' className='flex-center w-full my-20'>
          <img src="./assets/Logo.png" alt="" width={180} height={180} className='rounded-[20px]'/>

        </div>

        <div className='flex flex-col items-center'>
          <h2 className='hiw-title'>
          SkinX 
            <br /> 

          </h2>
          <p className='hiw-subtitle'>
          Detect, Diagnose, Defend.

          </p>
          

        </div>

      </div>

    </section>
  )
}

export default Feature