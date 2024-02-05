import { Player } from '../../types/Player'
import './PlayerCard.css';

type PlayerCardProps = {
  player: Player
}

const PlayerCard: React.FC<PlayerCardProps> = ({player}) => {
  let countryColor;
  if (player.country === 'Spain'){
    countryColor = 'color-red';
  } else if (player.country === 'Argentina'){
    countryColor = 'color-blue';
  }
  
  return (
    <div className="PlayerCard">
      <p className={countryColor}> Name: {player.name}, Ranking: {player.ranking}, Country: {player.country}</p>
      <p>{player.flag}</p>
    </div>
  )
}

export default PlayerCard