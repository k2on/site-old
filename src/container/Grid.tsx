import TileBanner from "./grid/Banner";
import TilePhonk from "./grid/Phonk";

function Grid() {
    return (
        <div className="grid grid-cols-1 md:mt-6 md:gap-6 md:grid-cols-3 lg:grid-cols-6">
            <TileBanner />
            <TilePhonk />
        </div>
    );
}

export default Grid;
