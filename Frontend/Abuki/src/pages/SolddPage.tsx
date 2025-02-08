import { Link } from 'react-router-dom'
import Sold from '../components/Sold'

const SoldPage = () => {
  return (
    <div>
        <Link to="/SoldForm"><button className="btn btn-primary"></button></Link>
        <Sold />
    </div>
  )
}

export default SoldPage
