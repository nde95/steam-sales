import "./expired-steam-button.styles.css";

const ExpiredSteamButton = ({ steamPageLink }) => {
    const redirectToSteamPage = () => {
        window.open(steamPageLink, "_blank");
    }

    return(
        <div className="expired-steam-btn-container">
            <button className="expired-steam-btn" onClick={redirectToSteamPage} >
                <span className="expired-steam-btn-text">View Steam Page</span>
                <span className="expired-steam-btn-icon"></span>
            </button>
        </div>
    )
}

export default ExpiredSteamButton;