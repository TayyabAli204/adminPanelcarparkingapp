import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
export default function SimpleMap() {
  const [currentLocation, setCurrentLocation] = useState({});
  const [mapData, setMapData] = useState({});
  const [markers, setMarkers] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
        setMarkers([...markers, { lat: latitude, lng: longitude }]);
      },
      (error) => {
      }
    );
  }, []);

  function renderMarkers(map, maps) {
    setMapData({ map, maps });
    markers.forEach((markerLocation) => {
      new maps.Marker({
        position: markerLocation,
        map,
        title: "Marker Title",
      });
    });
  }

  return (
    <>
      <div style={{ height: "70vh", width: "60%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: import.meta.env.VITE_API_KEY }}
          center={currentLocation}
          defaultZoom={11}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => {
            setMapData({ map, maps });
            renderMarkers(map, maps);
          }}
        />
      </div>
    </>
  );
}
