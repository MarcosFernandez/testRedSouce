import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders a Winner', () => {
  render(<App />);
  expect(screen.getByText(/Winner: Draw/i)).toBeInTheDocument();
});

test('Default input values must be 1', () =>{
    render(<App />);

    expect(screen.getByLabelText("Player1 Power")).toHaveValue(1);
    expect(screen.getByLabelText("Player2 Power")).toHaveValue(1);
    expect(screen.getByLabelText("Player1 Toughness")).toHaveValue(1);
    expect(screen.getByLabelText("Player2 Toughness")).toHaveValue(1);
});

test('Player 1 with power value 2 and toughness value 2 is winner', ()=>{
    render(<App />);

    const inputPower1 = screen.getByLabelText("Player1 Power");
    const inputToughness1 = screen.getByLabelText("Player1 Toughness");

    fireEvent.change(inputPower1, {target:{value:2}});
    fireEvent.change(inputToughness1, {target:{value:2}});

    expect(inputPower1).toHaveValue(2);
    expect(inputToughness1).toHaveValue(2);
    expect(screen.getByText(/Winner: Player1/i)).toBeInTheDocument();
});

test('Player 2 with power value 500 and toughness value 500 is winner', ()=>{
  render(<App />);

  const inputPower2 = screen.getByLabelText("Player2 Power");
  const inputToughness2 = screen.getByLabelText("Player2 Toughness");
  const powerValue = 500;
  const toughnessValue = 500;

  fireEvent.change(inputPower2, {target:{value:powerValue}});
  fireEvent.change(inputToughness2, {target:{value:toughnessValue}});

  expect(inputPower2).toHaveValue(powerValue);
  expect(inputToughness2).toHaveValue(toughnessValue);
  expect(screen.getByText(/Winner: Player2/i)).toBeInTheDocument();
});

test('User introduce empty value', ()=>{
  render(<App/>);

  const inputPower = screen.getByLabelText("Player1 Power");

  fireEvent.change(inputPower, {target:{value:500}});
  fireEvent.change(inputPower, {target:{value:''}});

  expect(inputPower).toHaveValue(500);
});







