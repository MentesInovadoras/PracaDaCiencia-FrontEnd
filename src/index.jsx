import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './templates/Home/index'
import WeekCalendar from './templates/WeekCalendar/index'
import ADM from './templates/ADMbase/index'
import Loading from './templates/Loading'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Loading/>
    {/* <Home/> */}
    {/* <WeekCalendar/> */}
    {/*<ADM>*/}
  </StrictMode>
)
