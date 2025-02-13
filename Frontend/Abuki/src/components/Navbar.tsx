import img from "../assets/abuki.png";
import "./Nav.css"

interface Props{
  // isCollapsed:boolean;
  changeCollapsed:()=>void
}
const Navbar = ({changeCollapsed}:Props) => {
  // const[isCollapsed, setisCollapsed]=useState(true)

  return (
    <nav className="nav">
      <div className="logo-cont">
        <button onClick={changeCollapsed}><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          style={{ display:"block",padding:"1px",width: "30px", height: "30px" }}
        >
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </svg></button>
        <div className="logo-cont">
          <img className="imga" src={img} alt="" style={{ width: "55px", height: "30px" }} />
        </div>
      </div>

      <div className="account-cont">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          style={{ padding:"2px",width: "30px", height: "30px", border:"black solid 1px", borderRadius:"3px", }}
        >
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;