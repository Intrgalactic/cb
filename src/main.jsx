import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthContext } from './context/authContext.jsx'
import Home from './pages/home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext.Provider>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  </React.StrictMode>,
)
