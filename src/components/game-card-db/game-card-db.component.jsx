import { useEffect, useState } from 'react';
import SteamButton from '../steam-button/steam-button.component';
import './game-card-db.styles.css';
// import ExpiredSteamButton from '../expired-steam-button/expired-steam-button.component';
import { getGames } from '../../utils/firebase.utils';

const GameCard2 = () => {
  const currentDate = new Date();
  const [games, setGames] = useState([]);

  useEffect(() => {
    // Fetch the games data
    const fetchGames = async () => {
      const gamesData = await getGames();
      setGames(gamesData);
    };

    fetchGames();
  }, []);


  return (
    <div className='game-card-container'>
      <div className='game-card'>
        {games.map((game) => (
          <div
            key={game.date_added}
            className={`game ${game.is_free ? '' : 'expired'}`}
          >
            <h2>{game.name}</h2>
            <img src={game.header_image} alt={game.name} />
            <div className='game-genres'>
              {/* store genres as separate entries with a map */}
              {game.genres.map((genre) => (
                <span key={genre} className='genre-badge'>{genre}</span>
              ))}
            </div>
            <p>{game.short_description}</p>
            {/* switch to disabled card on date expiry  */}
            {game.is_free ? (
                <>
                    <span className='sale-active'>Sale currently active</span>
                    <SteamButton appId={game.steam_appid} />
                </>
                ) : (
                <>
                    <span className='sale-over'>Sale ended</span>
                    <SteamButton appId={game.steam_appid} isExpired={!game.is_free} />
                </>
                )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameCard2;
