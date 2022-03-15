import Tile from "./Tile";
import TextLoop from "react-text-loop";
import { useEffect, useState } from "react";
import { useTransition, animated, config } from "react-spring";

const BACKGROUND_URI =
    "https://i.scdn.co/image/ab67706c0000bebbeeab23bad733129a30e66b73";

interface I {
    id: number;
    url: string;
}

const slides: I[] = [
    {
        id: 0,
        url: BACKGROUND_URI,
    },
    {
        id: 1,
        url: "https://i1.sndcdn.com/avatars-000397774380-92doww-t500x500.jpg",
    },
    {
        id: 2,
        url: "https://i1.sndcdn.com/avatars-gMEUr9qTTCESSPGR-MJUpTQ-t500x500.jpg",
    },
    {
        id: 3,
        url: "https://i1.sndcdn.com/avatars-000548321085-9lia0v-t500x500.jpg",
    },
    {
        id: 4,
        url: "https://i1.sndcdn.com/avatars-000698897074-6278iq-t500x500.jpg",
    },
];

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
    const transitions = useTransition(slides[index], (item) => item.id, {
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
                        <span className="text-4xl font-bold text-k2-green">
                            {isRotating ? (
                                <TextLoop interval={TIMEOUT}>
                                    <h1 className="text-k2-green">40 roll</h1>
                                    <h1 className="text-pink-300">Soudiere</h1>
                                    <h1 className="text-red-500">
                                        DJ Yung Vamp
                                    </h1>
                                    <h1>DJ Smokey</h1>
                                    <h1 className="text-yellow-400">erickD</h1>
                                </TextLoop>
                            ) : (
                                <h1 className="text-k2-green">40 roll</h1>
                            )}
                        </span>
                    </div>
                </div>
                {/* <div className="h-full relative">
                    <div className="relative h-full overflow-hidden">
                        <div className="absolute">
                            <img src={BACKGROUND_URI} alt="conver" />
                        </div>
                    </div>
                    <div className="bg-gradient-to-t from-black to-transparent h-full">
                        <div className="absolute bottom-0 p-2">
                            <h2 className="text-3xl font-semibold text-gray-300">
                                Discover
                            </h2>
                            <h1 className="text-4xl font-bold text-k2-green">
                                {isRotating ? (
                                    <TextLoop>
                                        <h2>Soudiere</h2>
                                        <h3>VAMP</h3>
                                        <h3>erickD</h3>
                                    </TextLoop>
                                ) : (
                                    <h1>40 roll</h1>
                                )}
                            </h1>
                            <h3 className="text-gray-500 text-sm">
                                1000+ songs, only on
                                <img
                                    className="inline-block grayscale h-4 ml-1"
                                    alt="Spotify"
                                    src="/spotify.svg"
                                />
                            </h3>
                        </div>
                    </div>
                </div> */}
            </a>
        </Tile>
    );
}

export default Phonk;
