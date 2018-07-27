import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './ListPage.css';

const roms = [
  {'id': 1, 'name': 'Bomberman', 'value': 'Bomberman'},
  {'id': 2, 'name': 'Dig Dug 1', 'value': 'DigDug1'},
  {'id': 3, 'name': 'Dig Dug 2', 'value': 'DigDug2'},
];

const romsList = roms.map((rom, index) => {
  return <li>
    <Link
      key={index}
      to={'/run/' + encodeURIComponent(rom.value)}
      className="list-group-item">
      {rom.name}
    </Link>
  </li>
});

class ListPage extends Component {
  render() {
    return (
      <div className="container">
        <ul>
          {romsList}
        </ul>
      </div>
    );
  }
}

export default ListPage;