import { useState } from "react";
import { useTransition, animated, config } from "react-spring";
import Tile from "./Tile";
import { Background } from "./types";

interface TileLiveProps {
    content?: (isRotating: boolean) => React.ReactNode;
    children?: React.ReactNode;
    backgrounds: Background[];
}
export const TILE_LIVE_TIMEOUT = 2000;

function TileLive(props: TileLiveProps) {
    const [isRotating, setIsRotating] = useState(false);
    const [timer, setTimer] = useState<NodeJS.Timer | null>(null);
    const [index, setIndex] = useState(0);

    const rotate = () => {
        setIndex((state) => (state + 1) % props.backgrounds.length);
    };

    const startRotation = () => {
        const timer = setInterval(rotate, TILE_LIVE_TIMEOUT);
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
    const transitions = useTransition(
        props.backgrounds[index],
        (item) => item.id,
        {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: config.molasses,
        },
    );

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
            <div
                className="relative w-full h-full"
                onMouseEnter={startRotation}
                onMouseLeave={endRotation}
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
                <div className="h-full absolute top-0 block w-full">
                    {props.content ? props.content(isRotating) : props.children}
                </div>
            </div>
        </Tile>
    );
}

export default TileLive;
