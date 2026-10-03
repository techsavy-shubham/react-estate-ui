import './map.scss'
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import Pin from '../Pin/Pin.jsx';
import 'leaflet/dist/leaflet.css';

function Map({items}){
  return (
        <MapContainer center={[51.505, -0.09]} zoom={7} scrollWheelZoom={false} className='map'>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
    {items.map(item =>
        <Pin key={item.id} item={item}/>
    )}
</MapContainer> 
  )
}

export default Map
