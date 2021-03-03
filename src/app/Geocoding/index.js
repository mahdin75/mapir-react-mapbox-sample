import useMapbox from '../../hooks/useMapbox';
import useGeocoding from '../../hooks/useGeocoding';
import { Link } from "react-router-dom";

function Geocoding(){
    const map = useMapbox("geocode-map");
    useGeocoding(map);

    return (
        <div id="geocode-map">
            {/* <Link to="/home"><a className="home-icon"></a></Link> */}
        </div>
        
    )
}
export default Geocoding;