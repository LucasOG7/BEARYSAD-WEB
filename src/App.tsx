import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { AnnouncementBar } from './components/Announcement/AnnouncementBar'
import { Home } from './pages/Home/Home'
import { Cart } from './pages/Cart/Cart'
import { Category } from './pages/Category/Category'
import { ProductDetail } from './pages/ProductDetail/ProductDetail'
import { NotFound } from './pages/NotFound/NotFound'
import { Footer } from './components/Footer/Footer'
import { CartProvider } from './contexts/CartContext'

function App() {

  return (
    <CartProvider>
      <div className="AppLayout">
        <AnnouncementBar />
        <Navbar />

        <main className="AppContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria/:slug" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
