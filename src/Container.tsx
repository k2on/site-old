import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Grid from "./container/Grid";
import TileBanner from "./container/grid/Banner";
import Post from "./container/Post";

import oyd from "./posts/oyd.md";

function Container() {
    return (
        <Router>
            <div className="mx-auto max-w-2xl ">
                <div className="md:my-6">
                    <TileBanner />
                </div>
                <Routes>
                    <Route path="/" element={<Grid />} />
                    <Route path="/oyd" element={<Post path={oyd} />} />
                </Routes>
            </div>
        </Router>
    );
}
export default Container;
