import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Invitation from './pages/Invitation.jsx'
import Rsvp from './pages/Rsvp.jsx'
import Details from './pages/Details.jsx'
import Farewell from './pages/Farewell.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Invitation />} />
        <Route path="/rsvp" element={<Rsvp />} />
        <Route path="/details" element={<Details />} />
        <Route path="/with-love" element={<Farewell />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
