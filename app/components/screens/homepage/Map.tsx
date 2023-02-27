import React from 'react';
import GoogleMapReact from 'google-map-react';

const MapComponent = () => {
  return (
    <div className='h-screen w-full'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: String(...addAPIKEY) }}
        defaultCenter={{ lat: 50.450001, lng: 30.523333 }}
        options={{
          fullscreenControl: false,
          zoomControl: false,
          clickableIcons: false,
          scrollwheel: false,
          keyboardShortcuts: false,
        }}
        defaultZoom={12}
      />
    </div>
  );
};

export default MapComponent;
