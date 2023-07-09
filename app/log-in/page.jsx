'use client'  
import Link from 'next/link'
import React, { useState } from 'react'
import { signIn } from '../components/firebase/auth/sign-in'
import { useRouter } from 'next/navigation'
const Page =  () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const {result, error} = await signIn(email, password)
    if(error){
      return console.log(error)

    }
    console.log(result)
    return router.push('/home')
  }
  return (
    <section className='flex justify-center items-center'>
        <div className="flex flex-col gap-5">
        <h2 className='capitalize text-center text-2xl font-extrabold'>sign in</h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-max p-3 justify-center items-center'>
            <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} required  name="email" id="email"/>
            <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} required  name="password" id="password"/>
            <input type="submit" value="sign in" className='py-2 px-3 hover:bg-red-500 cursor-pointer bg-red-600 rounded-md mx-auto w-max capitalize'/>
        </form>
        <p className="mx-auto w-max">Don't yet have an account? <Link href='/sign-up' className='underline hover:text-red-300'>sign up</Link></p>
        </div>
    </section>
  )
}

export default Page