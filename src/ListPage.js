import React, {Component} from 'react';
import {Link} from "react-router-dom";

const roms = [
  {'id': 1, 'name': 'Bomberman', 'value': 'Bomberman'},
  {'id': 2, 'name': 'Dig Dug 1', 'value': 'DigDug1'},
  {'id': 3, 'name': 'Dig Dug 2', 'value': 'DigDug2'},
];

const romsList = roms.map( (rom, index) => {
  return <Link
    key={index}
    to={'/run/' + encodeURIComponent(rom.value)}
    className="list-group-item">
    {rom.name}
  </Link>
});

class ListPage extends Component {
  render() {
    return (
      <div className="container ListPage my-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="mb-4">
              {romsList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListPage;