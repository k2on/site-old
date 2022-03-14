interface TileProps {
    span?: 2 | 3 | 4 | 6;
    children: React.ReactNode;
}

function Tile(props: TileProps) {
    // const size = props.span === 4 ? "md:col-span-4" : "md:col-span-2";
    return (
        <div
            style={{ minHeight: "10rem" }}
            className={
                "bg-white w-full col-span-1 " +
                // I didn't want to do this but tailwind don't work without a nested thing.
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
