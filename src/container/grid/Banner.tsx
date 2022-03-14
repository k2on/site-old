import { useState } from "react";
import QRCode from "./banner/QRCode";
import URLs from "./banner/URLs";
import Tile from "./Tile";

function BannerTile() {
    const QR_DEFAULT_COLOR = "white";
    const [QRColor, setQRColor] = useState(QR_DEFAULT_COLOR);
    return (
        <Tile size="lg">
            <div className="flex bg-black">
                <div onClick={() => setQRColor(QR_DEFAULT_COLOR)}>
                    <QRCode color={QRColor} />
                </div>
                <URLs setQRColor={setQRColor} />
            </div>
        </Tile>
    );
}

export default BannerTile;
