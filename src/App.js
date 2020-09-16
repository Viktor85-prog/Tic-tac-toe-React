import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: false,
    };
    this.WinnerCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  isWinner = () => {
    let s = this.state.count ? "X" : "O";
    for (let i = 0; i < this.WinnerCombination.length; i++) {
      let line = this.WinnerCombination[i];
      if (
        this.state.squares[line[0]] === s &&
        this.state.squares[line[1]] === s &&
        this.state.squares[line[2]] === s
      ) {
        alert(`${s} Win`);
        setTimeout(() => {
          this.setState({
            squares: Array(9).fill(null),
            count: false,
          });
        }, 1000);
      }
    }
  };

  clickHandler = (event) => {
    let data = event.target.getAttribute("id");
    let currentSquares = this.state.squares;
    if (currentSquares[data] === null) {
      currentSquares[data] = this.state.count ? "X" : "O";
      this.setState({
        squares: currentSquares,
        count: !this.state.count,
      });
    } else {
      alert("Занято");
    }
    this.isWinner();
  };

  render() {
    return (
      <div className="App">
        <table>
          <tr>
            <td className="cell" id="0" onClick={this.clickHandler}>
              {this.state.squares[0]}
            </td>
            <td className="cell" id="1" onClick={this.clickHandler}>
              {this.state.squares[1]}
            </td>
            <td className="cell" id="2" onClick={this.clickHandler}>
              {this.state.squares[2]}
            </td>
          </tr>
          <tr>
            <td className="cell" id="3" onClick={this.clickHandler}>
              {this.state.squares[3]}
            </td>
            <td className="cell" id="4" onClick={this.clickHandler}>
              {this.state.squares[4]}
            </td>
            <td className="cell" id="5" onClick={this.clickHandler}>
              {this.state.squares[5]}
            </td>
          </tr>
          <tr>
            <td className="cell" id="6" onClick={this.clickHandler}>
              {this.state.squares[6]}
            </td>
            <td className="cell" id="7" onClick={this.clickHandler}>
              {this.state.squares[7]}
            </td>
            <td className="cell" id="8" onClick={this.clickHandler}>
              {this.state.squares[8]}
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
