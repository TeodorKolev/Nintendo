import React from 'react'
import {Link} from "react-router-dom";
import { connect } from "react-redux";

class Play extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props.appName)
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
      'var gameUrl = "./nes/' + this.props.appName + '.nes";';
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
          <Link to={`${process.env.PUBLIC_URL}/`}>Back to home</Link>
        </ul>
        <div id="emu"></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    appName: state
  };
}

export default connect(mapStateToProps)(Play)