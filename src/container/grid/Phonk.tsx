import TextLoop from "react-text-loop";
import { getArtists } from "./phonk/artists";
import { artistsToBackgrounds, artistsToTitles } from "./phonk/util";
import { PLAYLIST_COVER_URL } from "./phonk/const";
import TileLive, { TILE_LIVE_TIMEOUT } from "./shared/TileLive";

const artists = getArtists();
const backgrounds = artistsToBackgrounds(PLAYLIST_COVER_URL, artists);
const artistTitles = artistsToTitles(artists);

function Phonk() {
    return (
        <TileLive
            backgrounds={backgrounds}
            content={(isRotating) => (
                <a
                    className="relative block w-full h-full"
                    href="https://open.spotify.com/playlist/5LPiXbNeB2Cm6DrmX1DgLZ"
                >
                    <div className="h-full bg-gradient-to-t from-black to-transparent absolute w-full top-0">
                        <div className="absolute bottom-0 p-2">
                            <h2 className="text-3xl font-semibold text-gray-300">
                                Discover
                            </h2>
                            <span className="text-4xl font-bold">
                                {isRotating ? (
                                    <TextLoop interval={TILE_LIVE_TIMEOUT}>
                                        {artistTitles}
                                    </TextLoop>
                                ) : (
                                    <h1 className="text-k2-green">40 roll</h1>
                                )}
                            </span>
                            <h3 className="text-gray-400 text-sm">
                                open in{" "}
                                <img
                                    className="h-4 ml-1 inline-block grayscale"
                                    src="/spotify.svg"
                                    alt="Spotify"
                                />
                            </h3>
                        </div>
                    </div>
                </a>
            )}
        />
    );
}

export default Phonk;
