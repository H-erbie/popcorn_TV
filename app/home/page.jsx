// 'use client'
import React from 'react'
// import { useGlobalContext } from '../components/context/context';
import ProtectedRoute from '../components/protectedRoute';


const page = async() => {
    // const {user} = useGlobalContext();
    // user && console.log(user.displayName.splice(0,1))
  return (
    <ProtectedRoute>
    <section>
      <p className="text-xl"></p>
    </section>
    </ProtectedRoute>
  )
}               
    
export default page