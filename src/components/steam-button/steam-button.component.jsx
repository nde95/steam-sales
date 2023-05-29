import "./steam-button.styles.css";

const SteamButton = () => {
    return(
        <div className="steam-btn-container">
            <button className="steam-btn">
                <span className="steam-btn-text">Navigate to Steam Page</span>
                <span className="steam-btn-icon"></span>
            </button>
        </div>
    )
}

export default SteamButton;