import Link from 'next/link';
import React from 'react'

const Footer = () => {
    const footerLinks = [
            {
                id: 1,
                url: '/',
                name: 'cookie preferences'
            },
            {
                id: 2,
                url: '/',
                name: 'faq'
            },
            {
                id: 3,
                url: '/',
                name: 'help center'
            },
            {
                id: 4,
                url: '/',
                name: 'privacy'
            },
            {
                id: 5,
                url: '/',
                name: 'account'
            },
            {
                id: 6,
                url: '/',
                name: 'terms of use'
            },
            {
                id: 7,
                url: '/',
                name: 'media center'
            },
            {
                id: 8,
                url: '/',
                name: 'jobs'
            },
            {
                id: 9,
                url: '/',
                name: 'contact us'
            },
        ]
  return (
    <footer className='p-5 sm:p-10 bg-[#111]'>
                <h2 className='capitalize text-center mb-5 text-2xl font-extrabold'>popcorn TV+</h2>
        <div className="grid sm:grid-cols-3 grid-cols-2  gap-3">
            {
                footerLinks.map((link) => {
                    const {id, name, url} = link;
                    return <Link href={url} key={id} className='w-max text-sm capitalize text-[#888]'>{name}</Link>
                })
            }
        </div>
        <p className="text-sm py-5">copyright &copy; 2023 popcorn inc. all rights reserved</p>
    </footer>
  )
}

export default Footer