import { useState, useEffect } from "react";
import { getPassword, getUsername } from "../common/local-storage";
import { useHistory } from "react-router-dom";

export default function Quizz() {
    const history = useHistory();
    useEffect(() => {
        if (getPassword() !== "sa" && getUsername() !== "sa") {
            history.push("/403")
        }
    }, [])
    return (
        <div>
            
        </div>
    )
}