import Head from 'next/head'
import Image from 'next/image'
import { gsap, ScrollTrigger, Draggable, } from 'gsap/all'
import { useRef, useEffect, useState } from 'react'


export default function Home() {
  // let text = useRef(null)
  const tl = gsap.timeline()
  // const [anime, setAnime] = useState()

  useEffect(() => {
    tl.set('#black', { scaleX: 0 })
    tl.set('#yellow', { scaleX: 0 })
    tl.from('#pic1', { duration: 1.5, opacity: 0, y: '+=500', ease: 'power3.out', })
    tl.from('#pic2', { duration: 1.5, opacity: 0, y: '+=500', ease: 'power3.out', }, '>-1.3')
    tl.from('#pic3', { duration: 1.5, opacity: 0, y: '+=500', ease: 'power3.out', }, '>-1.3')
    tl.from('#teks-h1', { duration: 1.3, opacity: 0, y: '+=50', ease: 'power3.out' }, '>-1.2')
    tl.from('#teks-h2', { duration: 1.3, opacity: 0, y: '+=50', ease: 'power3.out', }, '>-1.2')
    tl.from('#intro-button', { duration: 1.3, opacity: 0, y: '+=50', ease: 'power3.out', }, '>-1.2')
    tl.from('#anim-button', { duration: 1.3, opacity: 0, y: '+=50', ease: 'power3.out', }, '>-1.2')
    
  })

  const sound = () => new Audio("/Sounds/subaru-intro.mp3").play();
  const anim = () => {
    tl.to('#black', {scaleX: 1, transformOrigin: 'left', ease: 'power4.easeInOut', duration: 1.2})
    tl.to('#yellow', { scaleX: 1, transformOrigin: 'left', ease: 'power4.easeInOut', duration: 1.2}, '>-0.9.')
    tl.to('#yellow', { scaleX: 0, transformOrigin: 'right', ease: 'power4.easeInOut', duration: 0.9})
    tl.to('#black', { scaleX: 0, transformOrigin: 'right', ease: 'power4.easeInOut', duration: 0.9}, '>-0.7')
    // tl.set('#black', { scaleX: 0 })
    // tl.set('#yellow', { scaleX: 0 })
  }

  return (
    <div className='h-screen flex flex-row justify-between mx-32 overflow-hidden'>
      <div id='black' className='w-screen h-screen absolute left-0 top-0 bg-neutral-900 z-10' />
      <div id='yellow' className='w-screen h-screen absolute left-0 top-0 bg-yellow-200 z-10' />
      <div id='teks' className='align-middle self-center'>
        <h1 id='teks-h1' className='text-5xl opacity-1 text-neutral-100'>
          Chiwasssu!
        </h1>
        <h2 id='teks-h2' className='text-2xl opacity-1 text-neutral-400'>
          Hololive 2nd Generation Oozora Subaru
        </h2>
        <button id='anim-button' className='border py-1 px-3 rounded-md text-white mt-1' onClick={anim} >
          Animate
        </button>
        <br/>
        <button id='intro-button' onClick={sound}>
          <svg className="w-9 h-9 p-1 mt-1 text-neutral-300 rounded-full hover:bg-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
        </button>
      </div>
      <div id='pictures' className='' >
        <div id='pic-item' className='h-fit self-center'>
          <div className='absolute top-5 right-20'>
            <Image id='pic1' src='/Images/Subaru_kabedon.jfif' width={200} height={300} ></Image>
          </div>
          <div className='absolute top-14 right-[420px]'>
            <Image id='pic2' src='/Images/Subaru_longhair.jpg' width={250} height={400}></Image>
          </div>
          <div className='absolute top-[340px] right-28'>
            <Image id='pic3' src='/Images/Subaru-dino.jpg' width={270} height={300}></Image>
          </div>
        </div>
      </div>
    </div>
  )
}
