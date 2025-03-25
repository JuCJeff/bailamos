export interface LocationDetails {
    propertyName: string;
    address: string;
    city: string | undefined;
    state: string | undefined;
    googleMapsUrl: string | undefined;
    lat: number | undefined;
    lng: number | undefined;
};
