import Tile from "./shared/Tile";

interface BlankProps {
    span?: 2 | 3 | 4 | 6;
}

export function TileBlank(props: BlankProps) {
    return (
        <Tile span={props.span}>
            <div style={{ background: "#222" }} className="w-full h-full table">
                <span
                    title="Locked"
                    className="text-center text-xl table-cell align-middle"
                >
                    🔒
                </span>
            </div>
        </Tile>
    );
}

export default TileBlank;
