
import './App.css'
import './index.css'
import Layout from './layout'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Layout header={<Header />} content={<Content />} footer={<Footer />} />
    </>
  )
}

export default App
