import Tile from "./Tile";
import TextLoop from "react-text-loop";
import { useState } from "react";
import { useTransition, animated, config } from "react-spring";
import { getArtists } from "./phonk/artists";
import { artistsToBackgrounds, artistsToTitles } from "./phonk/util";
import { PLAYLIST_COVER_URL } from "./phonk/const";

const artists = getArtists();
const backgrounds = artistsToBackgrounds(PLAYLIST_COVER_URL, artists);
const artistTitles = artistsToTitles(artists);

function Phonk() {
    const [isRotating, setIsRotating] = useState(false);
    const [timer, setTimer] = useState<NodeJS.Timer | null>(null);
    const [index, setIndex] = useState(0);

    const TIMEOUT = 2000;

    const rotate = () => {
        setIndex((state) => (state + 1) % 5);
    };

    const startRotation = () => {
        const timer = setInterval(rotate, TIMEOUT);
        setTimer(timer);

        setIsRotating(true);
    };

    const endRotation = () => {
        clearInterval(timer!);

        setIndex(0);

        setIsRotating(false);
        // state.isRotating = false;
    };

    // @ts-ignore
    const transitions = useTransition(backgrounds[index], (item) => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    });

    // @ts-ignore
    const t = transitions.map(({ item, props, key }) => (
        <animated.div
            key={key}
            className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover"
            style={{
                ...props,
                backgroundImage: `url(${item.url})`,
            }}
        />
    ));

    return (
        <Tile>
            <a
                className="relative block w-full h-full"
                onMouseEnter={startRotation}
                onMouseLeave={endRotation}
                href="https://open.spotify.com/playlist/5LPiXbNeB2Cm6DrmX1DgLZ"
            >
                <div
                    className="h-full relative"
                    style={{
                        transform: isRotating ? "scale(1.2)" : "none",
                        transition: ".5s",
                    }}
                >
                    {t}
                </div>
                <div className="h-full bg-gradient-to-t from-black to-transparent absolute w-full top-0">
                    <div className="absolute bottom-0 p-2">
                        <h2 className="text-3xl font-semibold text-gray-300">
                            Discover
                        </h2>
                        <span className="text-4xl font-bold">
                            {isRotating ? (
                                <TextLoop interval={TIMEOUT}>
                                    {artistTitles}
                                </TextLoop>
                            ) : (
                                <h1 className="text-k2-green">40 roll</h1>
                            )}
                        </span>
                    </div>
                </div>
            </a>
        </Tile>
    );
}

export default Phonk;
