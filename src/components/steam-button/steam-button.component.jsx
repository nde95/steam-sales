import "./steam-button.styles.css";

const SteamButton = ({ appId, isExpired }) => {
    const steamLink = `https://store.steampowered.com/app/${appId}`;
    const redirectToSteamPage = () => {
        window.open(steamLink , "_blank");
    }
    const buttonClassName = `steam-btn${isExpired ? ' expired' : ''}`;

    return (
      <div className="steam-btn-container">
        <button className={buttonClassName} onClick={redirectToSteamPage}>
          <span className="steam-btn-text">View Steam Page</span>
          <span className="steam-btn-icon"></span>
        </button>
      </div>
    );
  };

export default SteamButton;