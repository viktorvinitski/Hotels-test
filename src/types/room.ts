export interface IRoom {
    bedConfiguration: string;
    disabledAccess: boolean;
    facilities: {code: string, name: string}[]
    id: string;
    images: {url: string, alt: string}[]
    longDescription: string;
    name: string;
    occupancy: {
        maxAdults: number,
        maxChildren: number,
        maxOverall: number
    }
    shortDescription: string;
}