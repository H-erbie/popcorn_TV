'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import {FaCaretUp} from 'react-icons/fa'
const ScrollToTop = () => {
    useEffect(() => {
        window.onload = window.addEventListener('scroll', () => {
            const sc = document.querySelector('.hide');
            sc.classList.toggle('scrolled', window.scrollY > 0)
        })
    },[])
  return (
    <Link href='#' className='hide'><FaCaretUp/></Link>
  )

}

export default ScrollToTop