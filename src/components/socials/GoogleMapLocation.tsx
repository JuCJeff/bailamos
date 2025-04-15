import { useState } from "react";

import { Button } from "@/components/ui/button";
import { MapIcon } from "lucide-react";

import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { mapOptions } from "@/data/googleMapConfigs";

import type { Location } from "@/types/eventTypes";

interface GoogleMapLocationProps {
  location: Location;
}

const libraries: ("places" | "marker")[] = ["places", "marker"];
const defaultCenter = { lat: 43.0722, lng: -89.4008 };

const GoogleMapLocation = ({ location }: GoogleMapLocationProps) => {
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

  const mapCenter = {
    lat: location.lat ?? defaultCenter.lat,
    lng: location.lng ?? defaultCenter.lng,
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
    libraries: libraries,
  });

  const handleClick = () => {
    window.open(location.googleMapsUrl, "_blank", "noopener,noreferrer");
  };

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <div className="flex flex-col">
      <h3 className="text-md text-primary font-bold mt-2">Location</h3>

      <Button
        variant="link"
        className="text-sm text-foreground"
        onClick={handleClick}
      >
        <MapIcon /><p>{location.propertyName}</p>
      </Button>

      {/* Map Container */}
      <div className="w-full h-72 rounded-md border mt-2">
        <GoogleMap
          center={mapCenter}
          zoom={15}
          mapContainerClassName="w-full h-full rounded-2xl"
          options={mapOptions}
        >
          <Marker
            position={{ lat: mapCenter.lat, lng: mapCenter.lng }}
            onClick={() => setInfoWindowOpen(true)}
          />

          {/* Info Window */}
          {infoWindowOpen && (
            <InfoWindow
              position={{ lat: mapCenter.lat, lng: mapCenter.lng }}
              onCloseClick={() => setInfoWindowOpen(false)}
            >
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-md text-primary">
                  {location.propertyName}
                </h3>
                <p className="text-sm text-gray-500">{location.address}</p>
                {location.city && location.state && (
                  <p className="text-sm text-gray-400">
                    {location.city}, {location.state}
                  </p>
                )}
                <a
                  href={location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline text-sm"
                >
                  View on Google Maps
                </a>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </div>
  );
};

export default GoogleMapLocation;
