import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home/index'
import WeekCalendar from './pages/WeekCalendar/index'
import ADM from './pages/ADM/index'
import Loading from './pages/Loading'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Loading/> */}
    <Home/>
    {/* <WeekCalendar/> */}
    {/* <ADM/> */}
  </StrictMode>
)
