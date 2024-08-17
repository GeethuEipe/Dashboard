import './App.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { DetailPage } from './components/DetailPage'
import Navbar from './components/Navbar'
import { SideBar } from './components/SideBar'
import UserTable from './components/UserTable'

function Home() {
  return (
    <div className="p-12">
      <Navbar />
      <div className="grid grid-cols-1 gap-20 md:flex ">
        <SideBar />
        <UserTable />
      </div>
    </div>
  )
}
function App() {
  return (
    <div className="bg-gray-800 h-full text-white">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
