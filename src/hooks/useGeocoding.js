import {useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import {geocodeRequest} from '../api/API';

function useGeocoding(map){
    useEffect(()=>{
        if(map!==null){
            map.on('click',e=>{
                geocodeRequest([e.lngLat.lng, e.lngLat.lat])
                .then(data=>data.json())
                .then(data=>{
                    new mapboxgl.Popup({ closeOnClick: false })
                    .setLngLat([e.lngLat.lng, e.lngLat.lat])
                    .setHTML(`<p class="popup-inner">${data.address}</p>`)
                    .addTo(map);
                })
            })
        }
    })
}

export default useGeocoding;