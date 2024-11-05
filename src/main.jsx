import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home/index'
import WeekCalendar from './pages/WeekCalendar/index'
import ADM from './pages/ADM/index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home/> */}
    <WeekCalendar/>
    {/* <ADM/> */}
  </StrictMode>
)
