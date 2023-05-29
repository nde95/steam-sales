import "./steam-button.styles.css";

const SteamButton = ({ steamPageLink }) => {
    const redirectToSteamPage = () => {
        window.open(steamPageLink, "_blank");
    }

    return(
        <div className="steam-btn-container">
            <button className="steam-btn" onClick={redirectToSteamPage} >
                <span className="steam-btn-text">View Steam Page</span>
                <span className="steam-btn-icon"></span>
            </button>
        </div>
    )
}

export default SteamButton;