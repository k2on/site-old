interface TileProps {
    size?: "sm" | "lg";
    children: React.ReactNode;
}

function Tile(props: TileProps) {
    return (
        <div
            className={
                "bg-white w-full col-span-1 " +
                (props.size === "lg" ? "md:col-span-2" : "md:col-span-1")
            }
        >
            {props.children}
        </div>
    );
}

export default Tile;
