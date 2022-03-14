import Tile from "./Tile";

const BACKGROUND_URI =
    "https://i.scdn.co/image/ab67706c0000bebbeeab23bad733129a30e66b73";

function Phonk() {
    return (
        <Tile>
            <a href="https://open.spotify.com/playlist/5LPiXbNeB2Cm6DrmX1DgLZ">
                <div
                    className="h-full bg-center bg-no-repeat bg-cover relative"
                    style={{
                        backgroundImage: `url(${BACKGROUND_URI})`,
                    }}
                >
                    <div className="bg-gradient-to-t from-black to-transparent h-full">
                        <div className="absolute bottom-0 p-2">
                            <h2 className="text-3xl font-semibold text-gray-300">
                                Discover
                            </h2>
                            <h1 className="text-4xl font-bold text-k2-green">
                                40 roll
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
                </div>
            </a>
        </Tile>
    );
}

export default Phonk;
