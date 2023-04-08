import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './bottomnav.css'
const BottomNav = () => {
  const location = useLocation()
  return (
    <div className="navbar5">
      <div className="navbar-home5">
        <Link to={"/home"} className="navbar-icon20 stylenone">
          {
            location.pathname == "/home" ? (
              <>

                <img
                  className="iconlyregularlightarrow-d"
                  alt=""
                  src="/iconlyregularbulkhome2active.svg"
                />
                <div className="home5 activetext">Home</div>
              </>
            ) : (
              <>
                <img
                  className="iconlyregularlightarrow-d"
                  alt=""
                  src="/iconlyregularbulkhome2.svg"
                />
                <div className="home5">Home</div>
              </>
            )
          }
        </Link>
        <Link to={"/activity"} className="navbar-icon21 stylenone">
          {
            location.pathname == "/activity" ? (
              <>

                <img
                  className="iconlyregularlightarrow-d"
                  alt=""
                  src="/iconlyregularlightdocument4active.svg"
                />
                <div className="activity6 activetext">Activity</div>
              </>
            ) : (
              <>
                <img
                  className="iconlyregularlightarrow-d"
                  alt=""
                  src="/iconlyregularlightdocument4.svg"
                />
                <div className="activity6">Activity</div>
              </>
            )
          }

        </Link>
        <Link to={"/wallet"} className="navbar-icon21 stylenone">
          {
            location.pathname == "/wallet" ? (
              <>

                <img
                  className="iconlyregularlightarrow-d"
                  alt=""
                  src="/iconlyregularlightwallet3active.svg"
                />
                <div className="activity6 activetext">Wallet</div>
              </>
            ) : (
              <>
                <img
                  className="iconlyregularlightarrow-d"
                  alt=""
                  src="/iconlyregularlightwallet3.svg"
                />
                <div className="activity6">Wallet</div>
              </>
            )
          }

        </Link>
        <Link to={'/userprofile'} className="navbar-icon21 stylenone" >
          {
            location.pathname == "/userprofile" ? (
              <>

                <img
                  className="iconlyregularlightarrow-d"
                  alt=""
                  src="/iconlyregularlightprofile5active.svg"
                />
                <div className="activity6 activetext">Account</div>
              </>
            ) : (
              <>
                <img
                  className="iconlyregularlightarrow-d"
                  alt=""
                  src="/iconlyregularlightprofile5.svg"
                />
                <div className="activity6">Account</div>
              </>
            )
          }

        </Link>
      </div>
    </div>
  )
}

export default BottomNav