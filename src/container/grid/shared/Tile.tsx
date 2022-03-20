interface TileProps {
    span?: 2 | 3 | 4 | 6;
    background?: string;
    children: React.ReactNode;
}

function Tile(props: TileProps) {
    const DEFAULT_BACKGROUND_COLOR = "black";

    const minHeight = "10rem";
    const background = props.background || DEFAULT_BACKGROUND_COLOR;

    return (
        <div
            style={{ minHeight, background }}
            className={
                "w-full col-span-1 overflow-hidden " +
                // Nessesary for tailwind to include these classes, as nested turnary, in pruning
                (props.span === 6
                    ? "md:col-span-6"
                    : props.span === 4
                    ? "md:col-span-4"
                    : props.span === 3
                    ? "md:col-span-3"
                    : "md:col-span-2")
            }
        >
            {props.children}
        </div>
    );
}

export default Tile;
