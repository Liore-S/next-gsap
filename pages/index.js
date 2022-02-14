import Head from 'next/head'
import Image from 'next/image'
import { gsap, ScrollTrigger, Draggable, } from 'gsap/all'
import { useRef, useEffect } from 'react'


export default function Home() {
  // let text = useRef(null)
  const tl = gsap.timeline()

  useEffect(() => {
    tl.from('#pic1', { duration: 1.5, opacity: 0, y: '+=500', ease: 'power3.out', })
    tl.from('#pic2', { duration: 1.5, opacity: 0, y: '+=500', ease: 'power3.out', }, '>-1.3')
    tl.from('#pic3', { duration: 1.5, opacity: 0, y: '+=500', ease: 'power3.out', }, '>-1.3')
    tl.from('#teks-h1', { duration: 1.3, opacity: 0, y: '+=50', ease: 'power3.out' }, '>-1.2')
    tl.from('#teks-h2', { duration: 1.3, opacity: 0, y: '+=50', ease: 'power3.out', }, '>-1.2')
  })

  // const tl = gsap.timeline(() =>{
  //   tl.from('#teks-h1', { duration: 1, opacity: 1, y: '+=48' })
  //   tl.from('#teks-h2', { duration: 1, opacity: 1, y: '+=48' })
  // })


  return (
    <div className='h-screen flex flex-row justify-between mx-32'>
      <div id='teks' className='align-middle self-center'>
        <h1 id='teks-h1' className='text-5xl opacity-1 text-white'>
          Hello
        </h1>
        <h2 id='teks-h2' className='text-4xl opacity-1 text-white'>
          Welcome!
        </h2>
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
