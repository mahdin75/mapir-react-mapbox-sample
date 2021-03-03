import React, { useState } from 'react';
import { searchRequest } from '../../api/API';
import markerIcon from '../../assets/images/marker-icon.svg';
import useMapbox from '../../hooks/useMapbox';
import useDataToMapbox from '../../hooks/useDataToMapbox';


function Search(){
    let [data, setData] = useState([]);
    let [showPopup,setShowPopup] = useState({show:false,data:{}});

    const map = useMapbox('map-search-results');
    let marker = useDataToMapbox(map,showPopup.data.geom);

    const searchBoxRef = React.createRef();

    function search(text){
        const results = searchRequest(text);
        results
        .then(res=>res.json())
        .then(res=>setData(res.value!==undefined?res.value:[]));
    }

    function closePopup(){
        console.log(marker.remove());
        setShowPopup({show:false,data:{}});
    }

    return (
        <div className="search">

            <input 
                type="text" 
                ref={searchBoxRef}
                placeholder="جستجو..."
                className="search-box" 
                onChange={e=>search(e.target.value)} 
                minLength="1"
            />
            {data.length!==0 &&
                <ul className="search-results">
                {
                    data.map((item)=>{
                        return <li onClick={()=>setShowPopup({show:true,data:item})}>{item.title}<img className="search-result-item-icon" src={markerIcon}/></li>
                    })
                }
                </ul>
            }

                <div className="search-popup" style={{display:showPopup.show === true?'block':'none'}}>
                    <div className="search-popup-inner">
                        <span style={{cursor:'pointer'}} onClick={()=>closePopup()}>&#10006;</span>
                        <div className="search-popup-inner__container">
                            <div className="search-popup-inner__map">
                                <div id="map-search-results"></div>
                            </div>
                            <div className="search-popup-inner__detail">
                                <ul>
                                    <li><i>عنوان:</i>  {showPopup.data.title|| <span style={{color:'red'}}>نا مشخص</span>}</li>
                                    <li><i>استان:</i>  {showPopup.data.province|| <span style={{color:'red'}}>نا مشخص</span>}</li>
                                    <li><i>شهرستان:</i> {showPopup.data.county|| <span style={{color:'red'}}>نا مشخص</span>}</li>
                                    <li><i>بخش:</i>  {showPopup.data.district|| <span style={{color:'red'}}>نا مشخص</span>}</li>
                                    <li><i>شهر:</i>  {showPopup.data.city|| <span style={{color:'red'}}>نا مشخص</span>}</li>
                                    <li><i>محله:</i>  {showPopup.data.Neighborhood|| <span style={{color:'red'}}>نا مشخص</span>}</li>
                                    <li><i>آدرس:</i> {showPopup.data.address || <span style={{color:'red'}}>نا مشخص</span>}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    )
}
export default Search;