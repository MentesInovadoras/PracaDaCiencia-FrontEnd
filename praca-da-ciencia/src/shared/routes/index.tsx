import { createBrowserRouter } from 'react-router-dom'
import Home from '../layouts/landpage'


export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home />,
        },
    ]
)


