import React from 'react'
import { Link } from 'react-router-dom'

const Aside = () => {
  return (
    <div>
      <Link to="/dashboard"><button>Dashboard</button></Link>
      <Link to="/present"><button>Present</button></Link>
      <Link to="/bought"><button>Bought</button></Link>
      <Link to="/sold"><button>Sold</button></Link>
    </div>
  )
}

export default Aside
