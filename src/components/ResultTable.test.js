import { ResultTable, chanceOfSuccess } from "./ResultTable";
import { fireEvent, render, screen } from '@testing-library/react';

test("if power equals 4 and skill 4 the chance of two succesess is 50%", () => {
    expect(chanceOfSuccess(2,4,2)).toBe(0.25);
});

test(",", () => {

    const player1 =  { power: 1, toughness: 1, skill: 4};
    const player2 =  { power: 1, toughness: 1, skill: 4};

    render(<ResultTable player1={player1} player2={player2} />);

    expect(screen.getByText("Toughness Player 1")).toBeInTheDocument();
    expect(screen.getByTestId("result_table_0_p1_toughness")).toHaveTextContent(player1.toughness);
    expect(screen.getByTestId("result_table_0_p2_toughness")).toHaveTextContent(player2.toughness);
    expect(screen.getByTestId("result_table_0_chance")).toHaveTextContent(0.25);
});