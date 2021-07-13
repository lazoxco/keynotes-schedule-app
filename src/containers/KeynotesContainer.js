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

  getTerm = (term) => {
    this.setState({ term: term });
  };

  render() {
    const { keynotes } = this.props;
    console.log(this.state);
    return (
      <div className="container">
        <Search getTerm={this.getTerm} />
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
