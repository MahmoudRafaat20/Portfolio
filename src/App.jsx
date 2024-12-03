
import './App.css'
import MasterLayout from './Components/MasterLayout/MasterLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
import Work from './Components/Work'

function App() {
     const routes=createBrowserRouter([{
      path:'/',
      element:<MasterLayout/>,
      children:[
        {index:"true",element:<Home/>},
        {path:"/about",element:<About/>},
        {path:"/experience",element:<Experience/>},
        {path:"/work",element:<Work/>},
        {path:"/skills",element:<Skills/>},
      ]}])

  return (
    <>
  <RouterProvider router={routes}></RouterProvider>
     </>
  )
}
export default App
