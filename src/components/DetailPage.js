import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

export const DetailPage = () => {
  const { id } = useParams()
  const [userDetails, setUserDetails] = useState(null)

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`)
        const data = await response.json()
        setUserDetails(data)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchUserDetails()
  }, [id])
  console.log('userDetails', userDetails)
  if (!userDetails) {
    return <div>Loading...</div>
  }
  return (
    <section className="flex items-center justify-center h-screen p-4 md:p-0">
      <div className="flex flex-col bg-gray-700 rounded-md md:w-1/2 items-center p-4 md:p-12 space-y-4">
        <img src={userDetails?.image} width={180} />
        <p className="font-bold">{userDetails?.firstName}</p>
        <p className="text-xl font-bold">{userDetails?.email}</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </section>
  )
}
