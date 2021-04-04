
import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import LocDetails from './LocDetails';
import "./Map.css"
function Map() {
  let [viewport, setViewport] = useState({
    laititude: 37.7577,
    longitude: -122.4376,
    zoom: 0,
    width: window.innerWidth,
    height: window.innerHeight
  })
  const [popupInfo, setPopupInfo] = useState(null);
  return (
    <div className="map">
      <ReactMapGL
        mapboxApiAccessToken={"pk.eyJ1Ijoia2FrYXNoaTI1MTAiLCJhIjoiY2ttb2xld2NxMGkzdzJwbGhpcXNkMmptMiJ9.--t9iJ_IT1Vz6XLBnNcVhA"}
        {...viewport} onViewportChange={(newView) => setViewport(newView)}>
        <Marker latitude={25.3176} longitude={82.9739} offsetLeft={-20} offsetTop={-10}>
          <img src="/images/car.png" width={50} height={50} />
        </Marker>

        <Marker latitude={13.0827} longitude={80.2707} offsetLeft={-20} offsetTop={-10}>
          {/* <img src="/images/car.png" width={50} height={50} /> */}

          <div
            style={{
              // border: "thin solid black",
              position: "relative",
              height: "20px",
              width: "20px",
            }}
            onClick={() => {
              console.log("Popup")
              // console.log(cluster.properties);
              setPopupInfo({
                // ...cluster.properties,
                latitude: 13.0827,
                longitude: 80.2707,
              });
            }}>
            <img src="/images/car.png" width={50} height={50} />
          </div>
        </Marker>

        <Marker latitude={21.1702} longitude={72.8311} offsetLeft={-20} offsetTop={-10}>
          <img src="/images/car.png" width={50} height={50} />
        </Marker>
        {popupInfo && (
          <Popup
            tipSize={5}
            anchor="bottom"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={() => setPopupInfo(null)}
          >
            <LocDetails/>
          </Popup>
        )}

      </ReactMapGL>
    </div>
  )
}

export default Map
