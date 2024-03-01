import './App.css';
import { useEffect, useState } from 'react';

import { Player } from './components/Player';

const defaultPlayer = {
  power: 1,
  toughness: 1,
  skill: 2
}

function App() {
  const [winner, setWinner] = useState(null);
  const [player1, setPlayer1] = useState({...defaultPlayer});
  const [player2, setPlayer2] = useState({...defaultPlayer});

 const computeResults = (player1, player2) => {
    if (player1.power > player2.power && player1.toughness > player2.toughness) {
      return "Player1";
    } else if (player2.power > player1.power && player2.toughness > player1.toughness) {
      return "Player2";
    } else {
      return "Draw";
    }
 }

  return (
    <div className="App">
      <div>Winner: {computeResults(player1, player2)}</div>

      <Player
          playerNumber={1}
          player={player1}
          setPlayer={setPlayer1}
      />

      <Player
          playerNumber={2}
          player={player2}
          setPlayer={setPlayer2}
      />

    </div>
  );
}

export default App;
