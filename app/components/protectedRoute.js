'use client'
import React, { useEffect } from 'react'
import {useRouter} from 'next/navigation'
import { useGlobalContext } from './context/context';

const ProtectedRoute = ({children}) => {
    const router = useRouter();
    const {user} = useGlobalContext();
    useEffect(()=> {
        if(!user){
            router.push('/')
        }
    },[router, user])
  return (
    <div>{user ? children : null}</div>
  )
}

export default ProtectedRoute