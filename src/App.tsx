import './App.css'

// 1. Tipos en Typescript

// const name: string = 'Jaime'
// const age: number = 29
// const isStudent: boolean = false
// const favoriteAnimals: string[] = ['dog', 'cat', 'snake']

// type User = {
//   username: string;
//   password: string;
//   age?: number
// }

// const newUser: User = {
//   username: 'pedrito',
//   password: 'malaga'
// }

// const favoriteNumber: string | number = 5

// const printName = function(name: string): void {
//   console.log(name)
// }

// printName('Jaime')

import { useState } from 'react'

// Components
import PlayerCard from './components/PlayerCard/PlayerCard'
import ButtonsSection from './components/ButtonsSection/ButtonsSection'

// Types
import { Player } from './types/Player'

const playersFromDB: Player[] = [
  {
    id: '43346',
    name: 'Arturo Coello',
    ranking: 1,
    country: 'Spain',
    points: 11933,
    img: 'https://www.padelfip.com/wp-content/uploads/2023/02/5-Coello.png',
    flag: '🇪🇸'
  },
  {
    id: '00333',
    name: 'Alejandro Galan',
    ranking: 2,
    country: 'Spain',
    points: 11501,
    img: 'https://www.padelfip.com/wp-content/uploads/2023/02/1-Galan.png',
    flag: '🇪🇸'
  },
  {
    id: '65465',
    name: 'Juan Lebron',
    ranking: 2,
    country: 'Spain',
    points: 11501,
    img: 'https://www.padelfip.com/wp-content/uploads/2023/02/2-Lebron.png',
    flag: '🇪🇸'
  },
  {
    id: '35576',
    name: 'Martin Di Nenno',
    ranking: 4,
    country: 'Argentina',
    points: 10171,
    img: 'https://www.padelfip.com/wp-content/uploads/2023/02/3-Di-Nenno.png',
    flag: '🇦🇷'
  },
  {
    id:'00516',
    name: 'Franco Stupaczuk',
    ranking: 5,
    country: 'Argentina',
    points: 9029,
    img: 'https://www.padelfip.com/wp-content/uploads/2023/02/6-Stupaczuk.png',
    flag: '🇦🇷'
  },
  {
    id: '00854',
    name: 'Agustin Tapia',
    ranking: 6,
    country: 'Argentina',
    points: 8954,
    img: 'https://www.padelfip.com/wp-content/uploads/2023/02/12-Augustin-Tapia-1.png',
    flag: '🇦🇷'
  },
  {
    id: '00556',
    name: 'Pablo Lima',
    ranking: 11,
    country: 'Brasil',
    points: 4106,
    img: 'https://www.padelfip.com/wp-content/uploads/2023/02/9-Lima.png',
    flag: '🇧🇷'
  },
]

const App: React.FC = () => {

  const [players, setPlayers] = useState<Player[]>(playersFromDB)

  const renderPlayerCards = ()=>{
    return players.map((eachPlayer)=>{
      return <PlayerCard key={eachPlayer.id} player={eachPlayer}/>
    })
  }

  return (
    <div className="App">
      <p>Best Padel Players</p>
      <ButtonsSection _playersFromDB={playersFromDB} _players={players} _setPlayers={setPlayers} />
      {renderPlayerCards()}
    </div>
  )
}

export default App


const animals = ['spider', 'snake']