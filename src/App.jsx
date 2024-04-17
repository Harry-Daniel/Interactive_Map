import React, { useEffect, useState } from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";

function App() {
  const staticMarker = {
    geocode: [6.6869, -1.5721],
    popUp: "Hello, I am Tech Junction",
  };

  const [liveLocation, setLiveLocation] = useState(null);

  useEffect(() => {
    // Fetch live location
    navigator.geolocation.getCurrentPosition((position) => {
      const liveLocationMarker = {
        geocode: [position.coords.latitude, position.coords.longitude],
        popUp: "Live Location",
      };
      setLiveLocation(liveLocationMarker);
    });

    // Clean up
    return () => {
      setLiveLocation(null);
    };
  }, []);

  useEffect(() => {
    if (!liveLocation) return;

    const map = L.map('map').setView(staticMarker.geocode, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const waypoints = [L.latLng(staticMarker.geocode), L.latLng(liveLocation.geocode)];

    L.Routing.control({
      waypoints,
      lineOptions: {
        styles: [{ color: "blue", opacity: 0.5, weight: 6 }],
      },
    }).addTo(map);

    // Cleanup
    return () => {
      map.remove();
    };
  }, [liveLocation]);

  return (
    <>
      <div id="map" style={{ height: "100vh", width: "100%" }}></div>
    </>
  );
}

export default App;
