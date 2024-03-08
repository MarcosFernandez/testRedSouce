import { fireEvent, render, screen } from '@testing-library/react';
import { Player } from "./Player";

test('user cannot enter a value lower than 2', ()=> {
    
    let setPlayerCall = false;

    render(
        <Player 
            playerNumber={1} 
            player={{power:1, toughness:1, skill:2}} 
            setPlayer={() => {setPlayerCall = true;}}    
        />
    );

    const inputSkill1 = screen.getByLabelText("Player1 Skill");
    fireEvent.change(inputSkill1, {target:{value:1}});
   
    expect(inputSkill1).toHaveValue(2);
    expect(setPlayerCall).toBe(false);
    
});


