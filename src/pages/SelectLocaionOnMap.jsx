import React from "react";
import GoogleMapReact from 'google-map-react';
import "./SelectLocation.css";
import { Link } from "react-router-dom";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SelectLocationOnMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' ,position:"relative"}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
      <div className="frame-div">
    
        <div className="set-your-destination-wrapper">
          <div className="set-your-destination">Set Your Destination</div>
        </div>
        <div className="search-found-on-maps-wrapper">
          <div className="search-found-on-maps6">
            <div className="icons-km6">
              <img className="icons6" alt="" src="/icons6.svg" />
              <div className="mertapada-kulon">2.5Km</div>
            </div>
            <div className="name-sub-name6">
              <div className="mertapada-kulon">Mertapada Kulon</div>
              <div className="jl-bali-larangan6">
                Jl. Bali, Larangan, Harjamukti, Kota Cirebon Kec
              </div>
            </div>
            <div className="add6">
              <img
                className="iconlyregularlightbookmark5"
                alt=""
                src="/iconlyregularlightbookmark5.svg"
              />
            </div>
          </div>
        </div>
        <div className="button1">
          <div className="apply-frame">
            <Link to={'/home'} className="back stylenone">Apply</Link>
          </div>
        </div>
      </div>
    </div>
  );
}