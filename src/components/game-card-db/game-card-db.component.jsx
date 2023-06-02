import { useEffect, useState } from 'react';
import SteamButton from '../steam-button/steam-button.component';
import './game-card-db.styles.css';
import { getGames, getDlc } from '../../utils/firebase.utils';

const GameCard2 = () => {
  const currentDate = new Date();
  const [displayMode, setDisplayMode] = useState('games');
  const [gameData, setGameData] = useState([]);
  const [dlcData, setDlcData] = useState([]);

  useEffect(() => {
    // Fetch the games data
    const fetchGames = async () => {
      const games = await getGames();
      setGameData(games);
    };

    // Fetch the DLC data
    const fetchDlc = async () => {
      const dlc = await getDlc();
      setDlcData(dlc);
    };

    fetchGames();
    fetchDlc();
  }, []);

  const handleDisplayModeToggle = () => {
    // Toggle the display mode between games and DLC
    const newDisplayMode = displayMode === 'games' ? 'dlc' : 'games';
    setDisplayMode(newDisplayMode);
  };

  let activeData = displayMode === 'games' ? gameData : dlcData;

  // Sort the activeData array by is_free (true first)
  activeData.sort((a, b) => (a.is_free === b.is_free ? 0 : a.is_free ? -1 : 1));

  return (
    <div>
      <div className='display-toggle'>
        <button onClick={handleDisplayModeToggle}>
          {displayMode === 'games' ? 'Games' : 'DLC'}
        </button>
      </div>
      <div className='game-card-container'>
        <div className='game-card'>
          {activeData.map((data, index) => (
            <div
              key={`${displayMode}_${index}`}
              className={`game ${data.is_free ? '' : 'expired'}`}
            >
              <h2>{data.name}</h2>
              <img src={data.header_image} alt={data.name} />
              <div className='game-genres'>
                {data.genres.map((genre) => (
                  <span key={genre} className='genre-badge'>
                    {genre}
                  </span>
                ))}
              </div>
              <p>{data.short_description}</p>
              {data.is_free ? (
                <>
                  <span className='sale-active'>Sale currently active</span>
                  <SteamButton appId={data.steam_appid} />
                </>
              ) : (
                <>
                  <span className='sale-over'>Sale ended</span>
                  <SteamButton
                    appId={data.steam_appid}
                    isExpired={!data.is_free}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameCard2;
