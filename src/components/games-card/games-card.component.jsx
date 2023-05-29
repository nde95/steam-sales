import gamesData from '../games.json';
import SteamButton from '../steam-button/steam-button.component';
import './games-card.styles.css';
import ExpiredSteamButton from '../expired-steam-button/expired-steam-button.component';


const GameCard = () => {
    console.log(gamesData);

    const currentDate = new Date();

    return (
        <div className='game-card-container'>
          <div className='game-card'>
            {gamesData.games.map((game) => (
              <div
                key={game.name}
                className={`game ${new Date(game.saleEndDate) < currentDate ? 'expired' : ''}`}
              >
                <h2>{game.name}</h2>
                <img src={game.thumbnail} alt={game.name} />
                <p>{game.description}</p>
                {new Date(game.saleEndDate) < currentDate ? (
                  <span>Sale ended</span>
                ) : (
                  <span>Sale ends on: {game.saleEndDate}</span>
                )}


                {new Date(game.saleEndDate) < currentDate ? (
                    <ExpiredSteamButton steamPageLink={game.steamPageLink} />
                ) : (
                    <SteamButton steamPageLink={game.steamPageLink} />
                )}
                
              </div>
            ))}
          </div>
        </div>
      );
    };

export default GameCard;