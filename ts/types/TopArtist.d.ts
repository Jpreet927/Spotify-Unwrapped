export type TopArtist = {
    external_urls: {
        spotify: string;
    };
    followers: null;
    genres: string[];
    href: string;
    id: string;
    images: ArtistImage[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
};

export type ArtistImage = {
    height: number;
    url: string;
    width: number;
};
