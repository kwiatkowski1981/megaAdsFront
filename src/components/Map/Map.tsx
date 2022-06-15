import React, {useContext, useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {SearchContext} from '../../contexts/search.context';
import '../../utils/fix-map-icon';
import {SimpleAdEntity} from 'types';
import {SingleAd} from "./SingleAd";
import {apiUrl} from "../../config/api";

import './Map.css';
import 'leaflet/dist/leaflet.css';

export const Map = () => {
    const {search} = useContext(SearchContext);
    const [ads, setAds] = useState<SimpleAdEntity[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/attach/search/${search}`);
            const data = await res.json();
            setAds(data);
        })();
    }, [search]);

    return (
        <div className="map">
            <MapContainer center={[47.3774497, 8.5016958]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> & contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {
                    ads.map(ad => (
                        <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                            <Popup>
                                <SingleAd id={ad.id}/>
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>

    )
}