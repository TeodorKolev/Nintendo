import React from 'react'
import {Link} from "react-router-dom";

class Play extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.createSettings();
    this.loadPlugin();
  }

  createSettings() {
    let defineSettings = document.createElement('script');
    defineSettings.type = 'text/javascript';
    let stringBuilder = '' +
      'var NepPlayer = "#emu";\n' +
      'var NepEmu = "nes";\n' +
      'var NepLang = "en";\n' +
      'var gameUrl = "' + process.env.PUBLIC_URL + '/nes/' + this.props.match.params.rom + '.nes";';
    console.log(stringBuilder)
    defineSettings.text = stringBuilder;
    document.body.appendChild(defineSettings);
  }

  loadPlugin() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = "https://mem.neptunjs.com/njs/njsLoader.js";
    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        <ul>
          <Link to='/'>Back to home</Link>
        </ul>
        <div id="emu"></div>
      </div>
    )
  }
}


export default Play