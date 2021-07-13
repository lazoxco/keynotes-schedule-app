import React, { Component } from 'react';
import Keynotes from '../components/Keynotes';
import { connect } from 'react-redux';
import { fetchKeynotes } from '../actions/keynoteActions';
import Search from '../components/Search';

class KeynotesContainer extends Component {
  state = {
    term: '',
  };

  componentDidMount() {
    this.props.fetchKeynotes();
  }

  render() {
    const { keynotes } = this.props;

    return (
      <div className="container">
        <Search handleChange={(e) => this.setState({ term: e.target.value })} />
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
