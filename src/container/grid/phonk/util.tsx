import { Artist } from "./types";
import { Background } from "../shared/types";

export const artistsToBackgrounds = (
    url: string,
    artists: Artist[],
): Background[] =>
    [{ id: 0, url }].concat(
        Array.from(artists.entries()).map(([idx, artist]) => ({
            id: idx + 1,
            url: artist.imageURL,
        })),
    );

export const artistsToTitles = (artists: Artist[]): JSX.Element[] =>
    [<span className="text-k2-green">40 roll</span>].concat(
        artists.map((artist) => (
            <span style={{ color: artist.color }}>{artist.title}</span>
        )),
    );
