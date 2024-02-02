import { Player } from '../../types/Player'

type ButtonsSectionProps = {
  players: Player[],
}


const ButtonsSection: React.FC<ButtonsSectionProps> = ({players}) => {

  let countriesToRender: string[] = []

  const assignCountries = (countriesToRender: string[])=>{
    players.forEach((player)=>{
      if(!countriesToRender.includes(player.country)){
        countriesToRender.push(player.country)
      }
    })
    return countriesToRender
  }

  countriesToRender = assignCountries(countriesToRender)

  return (
    <div className="PlayerCard">
      <button>Todos</button>
      {
        countriesToRender.map((country)=>{
          return <button>{country}</button>
        })
      }
    </div>
  )
}

export default ButtonsSection