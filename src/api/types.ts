export interface IApiHotelsListItem {
    address1: string;
    address2: string;
    checkInHours: string;
    checkInMinutes: string;
    checkOutHours: string;
    checkOutMinutes: string;
    country: string;
    countryCode: string;
    description: string;
    email: string;
    facilities: {code: string}[];
    id: string;
    images: {url: string}[];
    name: string;
    position: {
        timezone: string;
    }
    postcode: string;
    starRating: string;
    telephone: string;
    town: string;
}

export interface IApiHotelDescription {
    ratePlans: {
        cancellationPolicy: {
            applicable: string;
            hour: string;
            name: string;
            penalty: string;
            text: string;
        };
        id: string;
        shortDescription: string;
        longDescription?: string;
        prePayment?: string;
        prePaymentIsPercentage?: boolean;
        prePaymentValue?: number;
    }[];
    rooms: {
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
    }[]
}