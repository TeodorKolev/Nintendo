import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Home extends React.Component {
  state = {
    age: '',
    name: 'hai',
    toDashboard: false,
  };

  handleChange = event => {
    this.setState(() => ({
      toDashboard: true
    }));
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value)
    this.props.appSelected(event.target.value);
  };

  render() {
    const { classes } = this.props;

    if (this.state.toDashboard === true) {
      return <Redirect to='/play'/>
    }

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Age</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'Bomberman'}>Bomberman</MenuItem>
            <MenuItem value={'DigDug1'}>DigDug1</MenuItem>
            <MenuItem value={'DigDug2'}>DigDug2</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appSelected: (appName) => dispatch({type: 'APP_SELECTED', value: appName})
  };
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles), connect(null, mapDispatchToProps))(Home);