import {useEffect,useState} from 'react';
import mapboxgl from 'mapbox-gl';
import {mapBoxAccessToken,mapIrAccessToken,mapIrStyleUrl} from '../api/API.js'
mapboxgl.setRTLTextPlugin(
    'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
    null,
    true 
);

mapboxgl.accessToken = mapBoxAccessToken;

function useMapbox(id){
    const [map,setMap] = useState(null);
    useEffect(()=>{
        setMap(
            new mapboxgl.Map({
                container: id, 
                style: mapIrStyleUrl,
                center: [51.6, 32.7],
                zoom: 12,
                pitch: 65,
                transformRequest: (url, resourceType) => {
                    return {
                        url,
                        headers: { 
                            'x-api-key': mapIrAccessToken
                        }
                    }
                },
            })
        );
    },[])
    return map;
}

export default useMapbox;