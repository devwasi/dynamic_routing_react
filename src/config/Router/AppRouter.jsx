import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { RouteList } from '../../constant/RouteList/RouteList'

const AppRouter = () => {
  return (
    <Router>
        <Routes>
          {
            RouteList.map((e,i)=>{
              return <Route key={i} path={e.path} element={e.element}  />
            })
          }
            
        </Routes>
    </Router>
  )
}

export default AppRouter