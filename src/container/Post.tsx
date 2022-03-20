import { marked } from "marked";
import { useEffect } from "react";
import { useState } from "react";
import Tile from "./grid/shared/Tile";
import "./post/styles.scss";

interface PostProps {
    path: string;
}

function Post(props: PostProps) {
    const [postBody, setPostBody] = useState("");

    useEffect(() => {
        fetch(props.path)
            .then((resp) => resp.text())
            .then((text) => setPostBody(text));
    });
    const __html = marked.parse(postBody).replace(/<\/h\d>/g, "</h1><br/>");
    return (
        <Tile background="#222">
            <div
                className="text-white h-full py-2 px-4 post"
                dangerouslySetInnerHTML={{ __html }}
            ></div>
        </Tile>
    );
}

export default Post;
