export interface BioState {
    lastFetched: Date | null;
    genome: Genome | null;
    isLoading: boolean;
}

export type LinkService = 'instagram' | 'github' | 'linkedin' | 'facebook' | 'twitter';

export interface Link {
    id: string;
    name: LinkService;
    address: string;
}

export interface GenomePerson {
    professionalHeadline: string;
    completion: number;
    showPhone: boolean;
    verified: boolean;
    weight: number;
    locale: string;
    picture: string;
    name: string;
    links: Link[];
    pictureThumbnail: string;
    summaryOfBio: string;
    weightGraph: string;
    publicId: string;
    location: BioLocation;
}

export interface Stats {
    jobs: number;
    education: number;
    strengths: number;
    interests: number;
}

export interface Strength {
    id: string;
    code: number;
    name: string;
    weight: number;
    recommendations: number;
}

export interface BioLocation {
    name: string;
    shortName: string;
    country: String;
    latitude: number;
    longitude: number;
    timezone: string;
    timezoneOffSet: number;
}

export interface Genome {
    person: GenomePerson;
    stats: Stats;
    strengths: Strength[];
}