import {
    K2_BLUE,
    K2_GREEN,
    K2_ORANGE,
    K2_PURPLE,
    K2_RED,
    K2_YELLOW,
} from "../../../theme";
import { SetQRColor } from "./types";
import URL from "./urls/URL";

function URLs(props: { setQRColor: SetQRColor }) {
    return (
        <div className="mt-1">
            <URL color={K2_RED} setQRColor={props.setQRColor} />
            <URL color={K2_ORANGE} setQRColor={props.setQRColor} />
            <URL color={K2_YELLOW} setQRColor={props.setQRColor} />
            <URL color={K2_GREEN} setQRColor={props.setQRColor} />
            <URL color={K2_BLUE} setQRColor={props.setQRColor} />
            <URL color={K2_PURPLE} setQRColor={props.setQRColor} />
        </div>
    );
}

export default URLs;
