import BannerTile from "./grid/Banner";
import Phonk from "./grid/Phonk";

function Grid() {
    return (
        <div className="grid grid-cols-1 md:mt-6 md:gap-6 md:grid-cols-3 lg:grid-cols-6">
            <BannerTile />
            <Phonk />
        </div>
    );
}

export default Grid;
