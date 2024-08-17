import { Dashboard } from './icons/Dashboard'
import React from 'react'

export const SideBar = () => {
  const menuItems = [
    'DASHBOARD',
    'ICONS',
    'MAP',
    'NOTIFICATIONS',
    'USER PROFILE',
    'TABLE LIST',
    'TOPOGRAPHY',
    'RTL SUPPORT'
  ]

  return (
    <section className="md:w-[500px]">
      <div className="bg-gradient-to-b from-[#d946ef] via-[#d946ef] to-indigo-500 border-white text-white rounded-md p-6">
        <p className="border-b pb-4">CT CREATIVE TIM</p>
        <ul className="flex flex-col mt-4 space-y-12 mb-28">
          {menuItems.map((item, index) => (
            <li key={index} className="flex gap-2">
              <Dashboard />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
