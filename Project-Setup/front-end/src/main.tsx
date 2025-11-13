import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from "./Root"
import Home from './routes/Home'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children:[
      {
        index:true,
        element:<Home/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
