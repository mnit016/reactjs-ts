import { Alert } from "@material-ui/lab";

interface ErrorAlert {
    errorMessage: string
}

export default function ErrorAlert(props: ErrorAlert) {
    const errorMessage = props.errorMessage

    const alertErrorMessage = () => {
        if (errorMessage !== "") {
            const alertElement = document.getElementById("alert-error")
            const alertActive = alertElement?.getAttribute("class") + " alert-active"
            alertElement?.setAttribute("class", alertActive)
            setTimeout(() => {
            const alertUnactive = alertActive.replace(" alert-active", "")
            alertElement?.setAttribute("class", alertUnactive)
            }, 3000)
        }
    }

    return (
        <Alert onChange={alertErrorMessage} id="alert-error" variant="filled" severity="error">
        {errorMessage}
        </Alert>
    )
}