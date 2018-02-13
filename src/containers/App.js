import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/actions';
import Navbar from '../components/Navbar'
import Manager from '../components/Manager'
import '../assets/scss/App.scss';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Manager { ...this.props } />
            </div>
        )
    }
}

App.PropTypes = {
    actions: PropTypes.object
};

function mapStateToProps(state) {
    const { roster, rosters, selectedPage } = state.rosterReducer;
    const { rosterDeleted, editingRoster } = state.modalReducer;
    const { status } = state.statusReducer;
    return { roster, rosters, selectedPage, rosterDeleted, editingRoster, status };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);