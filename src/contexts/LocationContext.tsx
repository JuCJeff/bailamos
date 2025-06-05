import { createContext, useState, useEffect, useMemo, ReactNode } from "react";

type Location = {
  state: string;
  city: string | null;
};

type LocationContextType = {
  location: Location | null;
  setLocation: (loc: Location) => void;
  clearLocation: () => void;
};

const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("userLocation");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed?.state) {
          setLocation(parsed);
        }
      } catch (e) {
        console.error("Failed to parse stored location", e);
      }
    }
  }, []);

  const updateLocation = (loc: Location) => {
    setLocation(loc);
    localStorage.setItem("userLocation", JSON.stringify(loc));
  };

  const clearLocation = () => {
    setLocation(null);
    localStorage.removeItem("userLocation");
  };

  const contextValue = useMemo(
    () => ({
      location,
      setLocation: updateLocation,
      clearLocation,
    }),
    [location]
  );

  return (
    <LocationContext.Provider value={contextValue}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
