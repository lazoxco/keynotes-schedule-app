import React, { Component } from 'react';
import Keynotes from '../components/Keynotes';
import { connect } from 'react-redux';
import { fetchKeynotes } from '../actions/keynoteActions';

class KeynotesContainer extends Component {
  componentDidMount() {
    this.props.fetchKeynotes();
  }

  render() {
    const { keynotes } = this.props;

    return (
      <div className="container">
        <Keynotes keynotes={keynotes} />
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
