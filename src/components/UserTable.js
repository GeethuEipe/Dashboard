import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

const UserTable = () => {
  const [userData, setUserData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users')
        const data = await response.json()
        setUserData(data?.users)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchData()
  }, [])
  const handleViewDetails = userId => {
    navigate(`/user/${userId}`)
  }

  return (
    <section className="w-full">
      <div className="overflow-x-auto">
        <div className="max-h-screen overflow-y-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-sm">
            <thead>
              <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
                {['Name', 'Email', 'Phone', 'Gender', 'User Details'].map(
                  header => (
                    <th key={header} className="p-3 text-left border-b">
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            {userData && (
              <tbody>
                {userData?.map((user, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100">
                    {['firstName', 'email', 'phone', 'gender'].map(key => (
                      <td key={key} className="p-3 text-gray-800">
                        {user?.[key]}
                      </td>
                    ))}

                    <td
                      className="p-3 text-blue-600 cursor-pointer hover:underline"
                      onClick={() => handleViewDetails(user.id)}>
                      View Details
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </section>
  )
}

export default UserTable
