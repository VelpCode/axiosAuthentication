import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {

    const location = useLocation()

  return (
    <div>

        <h1>Hello {location.state.id} and welcome to Home</h1>

    </div>
  )

}

export default Home