import { SetQRColor } from "../types";

interface URLProps {
    color: string;
    setQRColor: SetQRColor;
}

function URL(props: URLProps) {
    return (
        <div
            onClick={() => props.setQRColor(props.color)}
            style={{ color: props.color }}
            className="font-mono text-lg italic hover:font-bold"
        >
            koon.dev
        </div>
    );
}

export default URL;
