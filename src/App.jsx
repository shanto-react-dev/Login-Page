import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// ----- React Imports
import Login from './Components/Login/Login'

function App() {
  // ----- React Browser Router
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Login />} />
      </Route>
    )
  )

  return (
    <>
    {/*    React Router Provider    */}
    <RouterProvider router={route} />
    </>
  )
}

export default App
