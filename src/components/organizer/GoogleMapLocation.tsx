import { useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  Autocomplete,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Controller, Control } from "react-hook-form";

import { Input } from "@/components/ui/input";

import { darkModeStyle } from "@/data/googleMapConfigs";

import type { EventFormValues } from "./CreatePost";
import type { LocationDetails } from "@/types/eventTypes";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";;

type GoogleMapsLocationProps = {
  control: Control<EventFormValues>;
  name: "location";
};

const mapOptions: google.maps.MapOptions = {
  styles: darkModeStyle, // Apply dark mode styles
  disableDefaultUI: true,
  mapTypeControl: false,
  fullscreenControl: false,
  streetViewControl: false,
};

const defaultCenter = { lat: 43.0722, lng: -89.4008 }; // Coordinates of the city of Madison

const GoogleMapLocation = ({ control, name }: GoogleMapsLocationProps) => {
  const [selectedLocation, setSelectedLocation] =
    useState<LocationDetails | null>(null);
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  const [mapCenter, setMapCenter] = useState(defaultCenter);

  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
    libraries: ["places"],
  });

  const handlePlaceChanged = (onChange: (value: LocationDetails) => void) => {
    if (!autocompleteRef.current) return;
    const place = autocompleteRef.current.getPlace();
    if (!place.geometry?.location) return;

    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();

    const locationData: LocationDetails = {
      propertyName: place.name ?? "",
      address: place.formatted_address ?? "",
      city: place.address_components?.find((c) => c.types.includes("locality"))
        ?.long_name,
      state: place.address_components?.find((c) =>
        c.types.includes("administrative_area_level_1")
      )?.short_name,
      googleMapsUrl: place.url
        ? place.url
        : `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
      lat,
      lng,
    };

    setSelectedLocation(locationData);
    setMapCenter({ lat, lng });
    onChange(locationData);
  };

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="space-y-2">
          {/* Search Input */}
          <Autocomplete
            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
            onPlaceChanged={() => handlePlaceChanged(field.onChange)}
          >
            <Input placeholder="Search for a location..." className="w-full" />
          </Autocomplete>

          {/* Map Container */}
          <div className="w-full h-72 rounded-md border">
            <GoogleMap
              center={mapCenter}
              zoom={15}
              mapContainerClassName="w-full h-full rounded-2xl"
              options={mapOptions}
            >
              {selectedLocation && (
                <Marker
                  position={{
                    lat: mapCenter.lat ?? defaultCenter.lat,
                    lng: mapCenter.lng ?? defaultCenter.lng,
                  }}
                  onClick={() => setInfoWindowOpen(true)}
                />
              )}

              {selectedLocation && infoWindowOpen && (
                <InfoWindow
                  position={{
                    lat: mapCenter.lat ?? defaultCenter.lat,
                    lng: mapCenter.lng ?? defaultCenter.lng,
                  }}
                  onCloseClick={() => setInfoWindowOpen(false)}
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-md text-primary">
                      {selectedLocation.propertyName}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {selectedLocation.address}
                    </p>
                    {selectedLocation.city && selectedLocation.state && (
                      <p className="text-sm text-gray-400">
                        {selectedLocation.city}, {selectedLocation.state}
                      </p>
                    )}
                    <a
                      href={selectedLocation.googleMapsUrl}
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
      )}
    />
  );
};

export default GoogleMapLocation;
