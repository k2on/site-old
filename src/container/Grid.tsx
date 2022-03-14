import BannerTile from "./grid/Banner";
import Phonk from "./grid/Phonk";
import Tile from "./grid/Tile";

function Grid() {
    return (
        <div className="grid grid-cols-1 md:gap-6 md:grid-cols-3 lg:grid-cols-6">
            <BannerTile />
            <Phonk />
            <Tile>hi</Tile>
        </div>
    );
}

export default Grid;
