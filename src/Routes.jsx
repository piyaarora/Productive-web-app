import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Calendar, Editor, Homepage, Kanban, Pomodoro } from './pages'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={(<Homepage />)} />
        <Route path="/home" element={(<Homepage />)} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
    </Routes> 
   )
}

export default Routing
