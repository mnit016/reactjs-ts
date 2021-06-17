import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function UnauthorisedPage() {
    return (
        <div>
            <div className="not-found-page">
            <img alt="not found" src="../403.png"/>
            <p>Sorry, you're not authorised to access this page</p>
            <Link className="link-nondecoration" to="/"><Button variant="contained" color="primary">Back Home</Button></Link>
        </div>
        </div>
    )
}