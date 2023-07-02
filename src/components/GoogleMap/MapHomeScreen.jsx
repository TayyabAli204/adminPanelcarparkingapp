
import React, { useEffect, useState ,useRef} from "react";
import GoogleMapReact from 'google-map-react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../searchBar/SearchBar";

export default function SimpleMap() {
  const [parkingLocation, setParkingLocation] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({})
  const [markers, setMarkers] = useState([{ lat: 33, lng: 78, },{ lat: 35, lng: 80 }]);
  const [calData, setCalculatedData] = useState([]);
  const state = useSelector((state) => state.adminSlice);
  const distance=useSelector((state)=>state.searchSlice.distance)
  console.log(state,'stateeeeeee',distance)
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
        console.log(position, "cuurent postion Geolocation position");
        setMarkers([...markers,{ lat: latitude, lng: longitude }])
      },
      (error) => {
        console.error('Error getting current location:', error);
      }
    );
  },[])



  const getCoordinatesForAddress = async (address) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address,
        )}&key=AIzaSyBRXj2DhUtd9c-hvmKWDJm4DIv-YUgWvjw`,
      );
      const data = await response.json();
      if (data.status === 'OK') {
        const location = data.results[0].geometry.location;
        console.log('insieeeeeeeeee', location);

        return location;
      } else {
        console.log('Geocoding error:', data.status);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };


  const setParkingSlotsLocation = async () => {
    const {data} = await axios.get(
      'https://long-jade-wasp-robe.cyclic.app/parkingSlot/location',
    );
    console.log("data from db",data)
    const parkingAreas = data.map((item) => {
      return new Promise(async (resolve, reject) => {
        try {
          const data = await getCoordinatesForAddress(item);
          resolve(data);
        } catch (error) {
          reject(error);
        }
      });
    });
      console.log("parkingAreas user has selected",parkingAreas)
    Promise.all(parkingAreas)
      .then(resolvedValues => {
        console.log('Coordinates fetched for all parking areas');
        const updatedArr = resolvedValues.map((item, index) => {
          const location  = data[index];
          return {
            location,
            ...item,
          };
        });
        setParkingLocation(updatedArr);
      })
      .catch(error => {
        console.error('Error fetching coordinates:', error);
      });
  };
  useEffect(() => {
    setParkingSlotsLocation();
  }, []);

  useEffect(() => {
    let calculatedData = [];
    if (state.parkingSlots.length > 0) {
      state.parkingSlots.forEach((item) => {
        const locatinInfo = calculatedData.find(
          (dataItem) => dataItem?.location == item?.location
          );
          // console.log(locatinInfo)
        const index = calculatedData.findIndex(
          (dataItem) => dataItem?.location === item?.location
        );
        // console.log(index)


        if (locatinInfo) {
          calculatedData.splice(index, 1, {
            location: item.location,
          
          });
        } else {
          calculatedData.push({
            location: item.location,
           
          });
        }
      });
      console.log("calculatedData",calculatedData)
      setCalculatedData(calculatedData);
    }
  }, [state.parkingSlots]);



  // const renderMarkers = (map, maps, currentLocation, positionLocations) => {
  //   let markers = [];
  
  //   // Create marker for current location
  //   let currentMarker = new maps.Marker({
  //     position: currentLocation,
  //     map,
  //     title: 'Current Location'
  //   });
  //   markers.push(currentMarker);
  
  //   // Create markers for each position location
  //   calData.forEach((position) => {
  //     let marker = new maps.Marker({
  //       position: position,
  //       map,
  //       title: 'Position Location'
  //     });
  //     markers.push(marker);
  //     console.log(markers,"ashfjasdhfkasjdhfkjasd")
  //   });
  //   return markers;
  // };


  // const renderMarkers = (map, maps) => {
  //   let marker = new maps.Marker({
  //   position: currentLocation,
  //   map,
  //   title: 'Hello World!'
  //   });
  //   console.log(marker,"current marker",currentLocation)
  //   return marker;
  //  };
  const [mapData,setMapData]=useState({})
  function renderMarkers(map, maps) {
    setMapData({map,maps})
    console.log(map,maps,'lkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
    markers.forEach((markerLocation) => {
      new maps.Marker({
        position: markerLocation,
        map,
        title: "Marker Title", // Replace with your desired marker title
      });
    });
  }
 

  return (
    <>
    <div style={{ height: '70vh', width: '60%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_API_KEY }}
        center={currentLocation}
        defaultZoom={11}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => {
          setMapData({map,maps})
          renderMarkers(map, maps); 
        }}
        
        />
    </div>
        </>
  );
}



