import {Dispatch, SetStateAction} from 'react'
import {Player} from '../../types/Player'

type ButtonsSectionProps = {
  _players: Player[]
  _setPlayers: Dispatch<SetStateAction<Player[]>>
  _playersFromDB: Player[]
}

const ButtonsSection: React.FC<ButtonsSectionProps> = ({
  _players,
  _setPlayers,
  _playersFromDB,
}) => {
  let countriesToRender: string[] = []
  const assignCountries = (countriesToRender: string[]) => {
    _playersFromDB.forEach((player) => {
      if (!countriesToRender.includes(player.country)) {
        countriesToRender.push(player.country)
      }
    })
    return countriesToRender
  }

  countriesToRender = assignCountries(countriesToRender)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonId = (event.target as HTMLButtonElement).id
    const playersToRender =
      buttonId === 'all'
        ? _playersFromDB
        : _playersFromDB.filter((player) => player.country === buttonId)
    _setPlayers(playersToRender)
  }

 const handleRandom = () => {
  const randomPlayer = _playersFromDB[Math.floor(Math.random() * _playersFromDB.length)];
  _setPlayers([randomPlayer])
 };


  return (
    <div className="PlayerCard">
      <button id="all" onClick={(event) => handleClick(event)}>
        Todos
      </button>
      <button onClick={() => handleRandom()}>
        Random
      </button>
      {countriesToRender.map((country, index) => {
        return (
          <button
            key={index}
            id={country}
            onClick={(event) => handleClick(event)}
          >
            {country}
          </button>
        )
      })}
    </div>
  )
}

export default ButtonsSection
