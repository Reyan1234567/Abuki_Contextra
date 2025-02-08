import { Link } from 'react-router-dom'
import Bought from '../components/Bought'

const BoughtPage = () => {
  return (
    <div>
        <Link to="/BoughtForm"><button className="btn btn-primary"></button></Link>
        <Bought />
    </div>
  )
}

export default BoughtPage
