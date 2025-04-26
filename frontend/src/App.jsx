import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import { Toaster } from 'react-hot-toast';

function App() {


  return (
    <div className="bg-gray-900 min-h-screen w-full flex flex-col items-center gap-5 px-4 py-10 ">
      <BrowserRouter>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
