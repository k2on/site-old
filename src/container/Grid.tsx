import TileBlank from "./grid/Blank";
import TilePhonk from "./grid/Phonk";

function Grid() {
    return (
        <>
            <div className="grid grid-cols-1 md:gap-6 md:grid-cols-6 lg:grid-cols-6">
                <TilePhonk />
                <TileBlank span={4} />
                <TileBlank span={4} />
                <TileBlank />
                <TileBlank />
                <TileBlank span={4} />
            </div>
        </>
    );
}

export default Grid;
