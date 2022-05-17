import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon'

import './Map.css';
import 'leaflet/dist/leaflet.css';

export const Map = () => {

    return (
        <>
            <div className="map">
                <MapContainer center={[47.3774497,8.5016958]} zoom={13}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> & contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    <Marker position={[47.3913565, 8.5086224]}>
                        <Popup>
                            <h2>Yokoy.ch</h2>
                            <p> Super IT StartUp</p>
                        </Popup>
                    </Marker>


                    <Marker position={[47.3847999,8.4981451]}>
                        <Popup>
                            <h2>Swiss National Museum</h2>
                            <p> Schweizerisches Nationalmuseum </p>
                        </Popup>
                    </Marker>


                </MapContainer>
            </div>
        </>
    )
}