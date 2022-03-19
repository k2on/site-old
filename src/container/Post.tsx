import { marked } from "marked";
import { useEffect } from "react";
import { useState } from "react";

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
    return (
        <div
            className="text-white"
            dangerouslySetInnerHTML={{ __html: marked.parse(postBody) }}
        ></div>
    );
}

export default Post;
