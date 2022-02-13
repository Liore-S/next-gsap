import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { gsap, ScrollTrigger, Draggable, } from 'gsap/all'
import { useRef, useEffect } from 'react'


export default function Home() {
  let text = useRef(null)

  useEffect(() => {
    gsap.to('#teks',{
      y: -50,
      opacity: 1,
    })
  })

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <h1 id='teks' className='text-5xl opacity-0 mt-12'>
        Hello
      </h1>
    </div>
  )
}
