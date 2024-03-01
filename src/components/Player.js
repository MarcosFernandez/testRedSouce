import React from "react";


const getSuccesRate = (skill) => {
    return (7 - skill) / 6;
}

export const chanceOfSuccess = (power,skill,succesNumber) => {
    
    if(succesNumber < 0) return 0;
    if (power === 0) {
        if (succesNumber === 0) return 1;
        return 0;
    } 
    if (power < succesNumber) return 0;


    const successRate = getSuccesRate(skill); 
    return successRate * chanceOfSuccess(power-1, skill, succesNumber -1) +
           (1 - successRate) * chanceOfSuccess(power-1, skill, succesNumber); 
}



export const Player = ({playerNumber,player,setPlayer}) => {

    const handlerStatChange = (currentStats, newStat, updatePlayer) => {
        
        const intValue = parseInt(newStat.value);
        if(isNaN(intValue)) return;  
        
        if (intValue === currentStats[newStat.key]) return; 

        if (newStat.key === "skill"){
            if (intValue < 2 || intValue > 6) return;
        }

        currentStats[newStat.key] = newStat.value;
        updatePlayer({...currentStats});
    }
   
    return(
      <div>
        Player {playerNumber}
        <form>
          <input id={`p${playerNumber}power`} type="number"
            onChange={(e) => handlerStatChange(player, {key: "power", value: e.target.value}, setPlayer)}
            value={player.power}>
          </input>
          <label htmlFor={`p${playerNumber}power`}>Player{playerNumber} Power</label>
          <input id={`p${playerNumber}tough`} type="number"
            onChange={(e)=> handlerStatChange(player, {key: "toughness", value: e.target.value}, setPlayer) }
            value={player.toughness}>
          </input>
          <label htmlFor={`p${playerNumber}tough`}>Player{playerNumber} Toughness</label>
          <input id={`p${playerNumber}skill`} type="number"
            onChange={(e)=>handlerStatChange(player, {key: "skill", value: e.target.value}, setPlayer)}
            value={player.skill}>
          </input>
          <label htmlFor={`p${playerNumber}skill`}>Player{playerNumber} Skill</label>
        </form>
      </div>
      
    );
}