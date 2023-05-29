import gamesData from '../games.json';
import SteamButton from '../steam-button/steam-button.component';
import './games-card.styles.css';


const GameCard = () => {
    console.log(gamesData);

    return (
        <div className='game-card-container'>
            <div className='game-card'>
            {gamesData.games.map((game) => (
                <div key={game.name} className='game'>
                <h2>{game.name}</h2>
                <img src={game.thumbnail} alt={game.name} />
                <p>{game.description}</p>
                <SteamButton steamPageLink={game.steamPageLink} />
                </div>
            ))}
            </div>
        </div>
      );
    };

export default GameCard;