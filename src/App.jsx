import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from "react-leaflet"
 
function App() {


  return (
    <>
      <MapContainer center={[6.6885, -1.6244]} zoom={13}>
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      </MapContainer>
    </>
  )
}

export default App
