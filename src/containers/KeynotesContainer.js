import React, { Component } from 'react';
import Keynotes from '../components/Keynotes';
import { connect } from 'react-redux';
import { fetchKeynotes } from '../actions/keynoteActions';

class KeynotesContainer extends Component {
  state = {
    term: '',
  };

  componentDidMount() {
    this.props.fetchKeynotes();
  }

  handleChange = (e) => {
    this.setState({
      term: e.target.value,
    });
  };

  render() {
    const { keynotes } = this.props;

    return (
      <div className="container">
        <input
          type="text"
          placeholder="Search..."
          onChange={this.handleChange}
        />
        <Keynotes keynotes={keynotes} term={this.state.term} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    keynotes: state.keynotes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchKeynotes: () => dispatch(fetchKeynotes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KeynotesContainer);
