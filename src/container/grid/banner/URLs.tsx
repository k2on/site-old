import { SetQRColor } from "./types";
import URL from "./urls/URL";

function URLs(props: { setQRColor: SetQRColor }) {
    return (
        <div className="mt-1">
            <URL color="#5e1935" setQRColor={props.setQRColor} />
            <URL color="#5b3220" setQRColor={props.setQRColor} />
            <URL color="#536028" setQRColor={props.setQRColor} />
            <URL color="#1f5d5c" setQRColor={props.setQRColor} />
            <URL color="#141e5b" setQRColor={props.setQRColor} />
            <URL color="#441c50" setQRColor={props.setQRColor} />
        </div>
    );
}

export default URLs;
