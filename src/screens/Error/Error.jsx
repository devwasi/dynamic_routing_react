import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h1>
            Error 404 : Page not found 
        </h1>
        <p>
            try searching other link <br /> or <br />
        </p>
        <button>
            <Link to={'/'}>
            Home
            </Link>
        </button>
    </div>
  )
}

export default Error