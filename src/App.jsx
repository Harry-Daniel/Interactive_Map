// import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, TileLayer } from "react-leaflet"

function App() {
  const markers = [
    {
      geocode: [6.6737, -1.5637],
      popUp: "Hello, I am engineering gate"
    },
    {
      geocode: [6.6818, -1.5725],
      popUp: "Hello, I am Faculty of Law"
    },
    {
      geocode: [6.6723, -1.5726],
      popUp: "Hello, I am Katanga Hall"
    },


  ];
  // const customIcon = new Icon({
  //   iconUrl: "https://www.flaticon.com/free-icon/pin_2377922",
  //   iconSize: [38, 38]
  // })

  return (
    <>
      <MapContainer center={[6.6885, -1.6244]} zoom={13}>
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        {markers.map(marker => (<Marker position={marker.geocode} >
          {/* icon={customIcon} */}
        </Marker>))}
      </MapContainer>

    </>
  )
}

export default App
