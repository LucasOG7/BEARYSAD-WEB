import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { AnnouncementBar } from './components/Announcement/AnnouncementBar'
import { Home } from './pages/Home/Home'
import { Cart } from './pages/Cart/Cart'
import { ProductDetail } from './pages/ProductDetail/ProductDetail'
import { NotFound } from './pages/NotFound/NotFound'

function App() {

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
