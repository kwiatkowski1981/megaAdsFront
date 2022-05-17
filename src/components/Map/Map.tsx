import React from 'react';
import './Map.css';
import {MapContainer, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';


export const Map = () => {

    return (
        <>
            <div className="map">
                <MapContainer center={[47.3729666,8.5058228]} zoom={13}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> & contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                </MapContainer>

            </div>
        </>
    )
}