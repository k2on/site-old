import { useState } from "react";
import { Link } from "react-router-dom";
import QRCode from "./banner/QRCode";
import URLs from "./banner/URLs";
import Tile from "./shared/Tile";

function TileBanner() {
    const QR_DEFAULT_COLOR = "white";
    const [QRColor, setQRColor] = useState(QR_DEFAULT_COLOR);
    return (
        <Tile span={6}>
            <div className="bg-black">
                <div className="mx-auto bg-black w-fit">
                    <div className="flex overflow-hidden">
                        <div onClick={() => setQRColor(QR_DEFAULT_COLOR)}>
                            <Link to="/">
                                <QRCode color={QRColor} />
                            </Link>
                        </div>
                        <URLs setQRColor={setQRColor} />
                    </div>
                </div>
            </div>
        </Tile>
    );
}

export default TileBanner;
