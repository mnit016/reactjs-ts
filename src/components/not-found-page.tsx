import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="not-found-page">
            <img alt="not found" src="../404.png"/>
            <p>Sorry, you've accessed a non-existing route</p>
            <Link className="link-nondecoration" to="/"><Button variant="contained" color="primary">Back Home</Button></Link>
        </div>
    );
}