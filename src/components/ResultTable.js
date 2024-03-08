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

export const ResultTable = ({player1, player2}) => {
    
    let chance1 = chanceOfSuccess(player1.power,player1.skill,0);
    let chance2 = chanceOfSuccess(player2.power,player2.skill,0);


    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Toughness Player 1</th>
                        <th>Toughness Player 2</th>
                        <th>Chance</th>
                    </tr> 
                </thead>
                <tbody>
                    <tr>
                        <td data-testid="result_table_0_p1_toughness">{player1.toughness}</td>
                        <td data-testid="result_table_0_p2_toughness">{player2.toughness}</td>
                        <td data-testid="result_table_0_chance">{chance1*chance2}</td>
                    </tr>   
                </tbody>
            </table>
        </div>
    );

}