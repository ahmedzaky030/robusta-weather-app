export interface GeoLocationPosition {
    coords: { longitude: number; latitude: number};
    timestamp: number;
}

export interface GeolocationResponse {
    data: {
        longitude: number;
        latitude: number;
        county: string;
        country: string;
        region: string;
    }[];
}
