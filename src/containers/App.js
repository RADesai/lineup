import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/actions';
import '../assets/scss/App.scss';

class App extends Component {
    render() {
        return (
            <div>
                Lineup
            </div>
        )
    }
}

App.PropTypes = {
    actions: PropTypes.object
};

function mapStateToProps(state) {
    console.log("state:", state);
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);