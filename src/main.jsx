import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home/index'
import WeekCalendar from './pages/WeekCalendar/index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    {/* <WeekCalendar/> */}
  </StrictMode>
)
