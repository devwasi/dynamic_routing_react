import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      
      <h1>
        This is Home page 
      </h1>
      <h3>
        Goto card section click here <Link to={'/card'} >Cards Data</Link>
      </h3>

    </div>
  )
}

export default Home