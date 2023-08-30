import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { loadMF1Home, loadMF2Home } from './services/load-module'

import './index.css'
import './language'
import { LoaderContainer } from './components/LoaderContainer'

const MF1Home = React.lazy(loadMF1Home)
const MF2Home = React.lazy(loadMF2Home)

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="page1"
          element={
            <React.Suspense fallback={<LoaderContainer>Loading  MF1Home...</LoaderContainer>}>
              <MF1Home />
            </React.Suspense>
          }
        />
        <Route
          path="page2"
          element={
            <React.Suspense fallback={<LoaderContainer>Loading MF2Home...</LoaderContainer>}>
              <MF2Home />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
