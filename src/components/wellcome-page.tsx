import { useEffect, useState } from "react";
import { getPassword, getUsername } from "../common/local-storage";
import '../App.css'
import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

export function NotLogInWellCome() {
    const history = useHistory();
    useEffect(() => {
        if (getPassword() === "sa" && getUsername() === "sa") {
            history.push("/home")
        }
    }, [])
    return (
        <div className="wellcome-box">
            <img className="warning-image" alt="danger" src="../danger.png"/>
            <h2>Are you ready for challenge?</h2>
            <p>The quiz is ready to start, but you need to login first to accept it</p>
            <Link className="link-nondecoration" to="/login"><Button variant="contained" color="primary">Login to your account</Button></Link>
        </div>
    )
}

export function LoggedInWellCome() {
    const history = useHistory();
    useEffect(() => {
        if (getPassword() !== "sa" && getUsername() !== "sa") {
            history.push("/403")
        }
    }, [])
    return (
        <div className="wellcome-box">
            <img className="warning-image" alt="danger-blue" src="../danger-blue.png"/>
            <h2>Challenge accepted</h2>
            <p>You have not finished your challenge yet. Get it now to received your ranking</p>
            <Link className="link-nondecoration" to="/quizz"><Button variant="contained" color="primary">Go to Quiz challenge</Button></Link>
        </div>
    )
}