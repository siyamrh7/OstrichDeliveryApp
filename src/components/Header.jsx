import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "./header.css"
const Header = ({text}) => {
  const navigate=useNavigate()
  const goBack=()=>{
    navigate(-1)
  }
  return (
    <div className="iconlyregularoutlinearrow-parent1">
        <img
        onClick={goBack}
          className="iconlyregularoutlinearrow-6"
          alt=""
          src="/iconlyregularoutlinearrow--left1.svg"
        />
        <div className="get-started-frame">
          <b className="get-started2">{text}</b>
        </div>
        {/* <img className="iconlyregularoutlinearrow-6" alt="" /> */}
      </div>
  )
}

export default Header