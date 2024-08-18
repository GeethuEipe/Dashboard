import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

const UserTable = () => {
  const [userData, setUserData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(10)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users')
        const data = await response.json()
        setUserData(data?.users || [])
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchData()
  }, [])

  const handleViewDetails = userId => {
    navigate(`/user/${userId}`)
  }

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser)
  const totalPages = Math.ceil(userData.length / usersPerPage)

  const nextPage = () =>
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))
  const prevPage = () => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))

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
            <tbody>
              {currentUsers.map((user, index) => (
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
          </table>
          <div className="flex gap-4 justify-center items-center mt-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserTable
