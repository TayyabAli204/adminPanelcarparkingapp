import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {setDistance} from '../../store/searchSlice'
function SearchBar() {
    const dispatch=useDispatch()
  useEffect(() => {
    let autocomplete;

    function handleScriptLoad() {
      // Create the search box and link it to the UI element.
      const input = document.getElementById("pac-input");
      autocomplete = new window.google.maps.places.Autocomplete(input);
      autocomplete.addListener("place_changed", handlePlaceSelect);
    }

    function handlePlaceSelect() {
      const place = autocomplete.getPlace();
      console.log(place,'place ffffffffffffffffffffffffffffffffffffffffff',place.geometry?.location); // Do something with the selected place
  dispatch(setDistance({place}))
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBRXj2DhUtd9c-hvmKWDJm4DIv-YUgWvjw&libraries=places`;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", handleScriptLoad);
    document.head.appendChild(script);

    return () =>{
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <input id="pac-input" type="text" />
      <div id="map" style={{ height: "400px" }}></div>
    </div>
  );
}

export default SearchBar;
