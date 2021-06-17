import CircularProgress from '@material-ui/core/CircularProgress';

export function Loading() {
    return (
        <div id="loading">
            <div className="loading-icon">
                <CircularProgress/>
            </div>
        </div>
    )
}

export function showLoading() {
    const loadingElement = document.getElementById("loading")
    const loadingActiveClass = loadingElement?.getAttribute("class") + " loading-active"
    loadingElement?.setAttribute("class", loadingActiveClass)
}

export function hideLoading() {
    const loadingElement = document.getElementById("loading")
    const loadingActiveClass = loadingElement?.getAttribute("class") + ""
    const loadingUnActiveClass = loadingActiveClass.replace(" loading-active", "")
    loadingElement?.setAttribute("class", loadingUnActiveClass)
}