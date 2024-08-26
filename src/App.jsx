
import './App.css'
import './index.css'
import Layout from './layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

import ImageGalleryPage from './ImageGalleryPage'

// import { ImageProvider } from './provider/ImageProvider';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout header={<Header />} content={<Content />} footer={<Footer />} />} />
        <Route path="/image-gallery/:imgId" element={<ImageGalleryPage />} />
      </Routes>
    </Router>
  )
}

export default App
