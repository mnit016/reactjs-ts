import { useEffect, useState } from "react";
import { getPassword, getUsername } from "../common/local-storage";
import '../App.css'
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function WellComePage() {
    const loggedin = <LoggedInWellCome/>
    const notLogin = <NotLogInWellCome/>
    const [wellcomeText, setWellcomeText] = useState(() => notLogin)
    useEffect(() => {
        if (getPassword() === "sa" && getUsername() === "sa") {
            setWellcomeText(loggedin)
        } else {
            setWellcomeText(notLogin)
        }
    })
    return (
        <div className="wellcome-box">
            {wellcomeText}
        </div>
    );
}

function NotLogInWellCome() {
    return (
        <div>
            <img className="warning-image" alt="danger" src="../danger.png"/>
            <h2>Are you ready for challenge?</h2>
            <p>The quiz is ready to start, but you need to login first to accept it</p>
            <Link className="link-nondecoration" to="/login"><Button variant="contained" color="primary">Login to your account</Button></Link>
        </div>
    )
}

function LoggedInWellCome() {
    return (
        <div>
            <img className="warning-image" alt="danger-blue" src="../danger-blue.png"/>
            <h2>Challenge accepted</h2>
            <p>You have not finished your challenge yet. Get it now to received your ranking</p>
            <Link className="link-nondecoration" to="/quizz"><Button variant="contained" color="primary">Go to Quiz challenge</Button></Link>
        </div>
    )
}