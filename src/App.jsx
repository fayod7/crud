import React from 'react'
import { useRoutes } from 'react-router-dom'
import Movie from './pages/movie/Movie'
import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'

const App = () => {
  return useRoutes([
       {
      path: "/",
      element: <Layout />,

      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: "/movies",
          element: <Movie/>,
        },
      ],
    },
  ])
}

export default App