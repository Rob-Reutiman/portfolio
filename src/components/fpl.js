import React from 'react';
import Nav from './nav'

// TODO: GET PLAYER DATA FROM API
let players = [
  {name: 'Bruno Fernandes', pass_accuracy: '86', shots_per_90: '4.2'}, 
  {name: 'Kevin DeBruyne', pass_accuracy: '90', shots_per_90: '3.8'}
]

class FPL extends React.Component {
  render() {

    const tableHeaders = Object.keys(players[0]).map(key => {
      return <th className='paragraph teal text-center'>{key}</th> 
    });

    const tableRows = players.map(item => {
      return (
        <tr>
          {Object.values(item).map(value => {
            return <td className='paragraph welcome text-center'>{value}</td>
          })}
        </tr>
      );
    });

    return(
      <React.Fragment>
        <Nav active={this.props.match.url}/>
        <div className='background'>
          <table>
            <thead>
              <tr>
                {tableHeaders}
              </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default FPL;