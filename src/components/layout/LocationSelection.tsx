import { useEffect, useState } from "react";
import { collection, getDocs, FirestoreError } from "firebase/firestore";
import { db } from "@/firebase/config";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

import { useLocation } from "@/hooks";

const LocationSelection = () => {
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [initializing, setInitializing] = useState(true);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const { location, setLocation } = useLocation();


  const [selectedState, setSelectedState] = useState<string>(
    location?.state || "any"
  );
  const [selectedCity, setSelectedCity] = useState<string>(
    location?.city || "any"
  );

  useEffect(() => {
    if (location) {
      setSelectedState(location.state || "any");
      setSelectedCity(location.city || "any");
    }
  }, [location]);

  // Fetch states on mount
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const snapshot = await getDocs(collection(db, "states"));
        const stateList = snapshot.docs.map((doc) => doc.id);
        setStates(stateList);
      } catch (error) {
        console.error(
          "Error fetching states:",
          (error as FirestoreError).message
        );
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    if (selectedState === "any") {
      setCities([]);
      setSelectedCity("any");
      return;
    }

    if (!selectedState) return;

    const fetchCities = async () => {
      try {
        const snapshot = await getDocs(
          collection(db, "states", selectedState, "cities")
        );
        const cityList = snapshot.docs.map((doc) => doc.id);
        setCities(cityList);

        // Only set city from location if we're initializing
        if (
          initializing &&
          location?.city &&
          cityList.includes(location.city)
        ) {
          setSelectedCity(location.city);
        } else if (!location?.city || !cityList.includes(location.city)) {
          setSelectedCity("any");
        }

        setInitializing(false); // Done initializing
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, [initializing, location, selectedState]);

  const handleSave = () => {
    const cityToUse = selectedCity === "any" ? null : selectedCity;

    console.log("Selected location:", {
      state: selectedState,
      city: cityToUse ?? "Any City",
    });

    setLocation({
      state: selectedState,
      city: cityToUse ?? "Any City",
    });

    setDialogOpen(false); // Close dialog after saving
  };

  const handleClearSelection = () => {
    setSelectedState("any");
    setSelectedCity("any");
    setCities([]);
  };

  const displayLabel = () => {
    const city =
      selectedCity === "any" || !selectedCity ? "Any City" : selectedCity;
    const state =
      selectedState === "any" || !selectedState ? "Any State" : selectedState;

    if (city === "Any City" && state === "Any State") {
      return "Select Location";
    }

    return `${city}, ${state}`;
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setDialogOpen(true)}>
          {displayLabel()}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Select Location</DialogTitle>
          <DialogDescription>
            Pick a location that has upcoming events on our platform
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {/* State Selector */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">State</Label>
            <Select onValueChange={setSelectedState} value={selectedState}>
              <SelectTrigger className="col-span-3 w-full">
                <SelectValue placeholder="Select a state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any State</SelectItem>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* City Selector */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">City</Label>
            <Select
              value={selectedCity}
              onValueChange={setSelectedCity}
              disabled={selectedState === "any"}
            >
              <SelectTrigger className="col-span-3 w-full">
                <SelectValue placeholder="Any City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any City</SelectItem>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter className="flex justify-between w-full">
          <Button
            type="button"
            variant="outline"
            onClick={handleClearSelection}
          >
            Clear Selection
          </Button>

          <Button type="button" disabled={!selectedState} onClick={handleSave}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LocationSelection;
