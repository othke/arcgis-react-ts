import React, { useState, useRef, useEffect } from 'react';
import EsriMap from 'esri/Map';
import EsriMapView from 'esri/views/MapView';


const Map = () => {
  const mapRef = useRef(null);
  let map: EsriMap, mapView: EsriMapView;

  useEffect(() => {
    if (map || !mapRef.current) {
      return;
    }
    map = new EsriMap({
      basemap: 'streets',
    });
    mapView = new EsriMapView({
      map,
      container: 'map',
    });
  });
  return (
    <div
      id="map"
      style={{ width: '100%', height: '400px', backgroundColor: 'aliceblue' }}
      ref={mapRef}
    />
  );
};

export default Map;
