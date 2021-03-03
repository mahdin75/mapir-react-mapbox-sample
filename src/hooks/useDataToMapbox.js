import mapboxgl from 'mapbox-gl';

function useDataToMapbox(map, geom) {
    if (geom !== undefined) {
        const marker = new mapboxgl.Marker()
            .setLngLat({ lng: geom.coordinates[0], lat: geom.coordinates[1] })
            .addTo(map);
        map.flyTo({
            center: geom.coordinates,
            speed: 1.8
        });
        return marker;
    }
}

export default useDataToMapbox;