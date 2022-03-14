import BannerTile from "./grid/Banner";
import Tile from "./grid/Tile";

function Grid() {
    return (
        <div className="grid grid-cols-1 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
            <BannerTile />
            <Tile>hi</Tile>
            <Tile>hi</Tile>
        </div>
    );
}

export default Grid;
