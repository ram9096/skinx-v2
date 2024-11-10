import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import VideoCareousal from './VideoCareousal'

const Highlights = () => {
    useGSAP(() => {
        gsap.to('#title',{scrollTrigger:{trigger:"#title",toggleActions:"restart none none none"},opacity:1 ,duration:2, y:0})
        gsap.to('.linke',{scrollTrigger:{trigger:".linke",toggleActions:"restart none none none"},opacity:1,y:0,duration:2}) 

    },[])
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
        <div className='screen-max-width'>
            <div className='mb-12 md:flex w-full items-end justify-between'>
                <h1 id='title' className='section-heading'>Get the hightlights.</h1>
                <div className='flex flex-wrap items-end gap-5'>
                    <p className='linke'><a href="./assets/team-video.mp4">Watch the Journey </a><img src="./assets/watch.svg" className='ml-2' alt="" /></p>

                </div>
            </div>
            <VideoCareousal />

        </div>

    </section>
  )
}

export default Highlights