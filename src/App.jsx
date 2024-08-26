
import './App.css'
import './index.css'
import Layout from './layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

import ImageGalleryPage from './ImageGalleryPage'

import { TabProvider } from './provider/TabProvider';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TabProvider><Layout header={<Header />} content={<Content />} footer={<Footer />} /></TabProvider>} />
        <Route path="/image-gallery/:imgId" element={<ImageGalleryPage />} />
      </Routes>
    </Router>
  )
}

export default App
