import Present from '../components/Present'
import { Link } from 'react-router-dom'

const PresentPage = () => {
  return (
    <div>
        <Link to="/PresentForm"><button className="btn btn-primary"></button></Link>
        <Present />
    </div>
  )
}

export default PresentPage
