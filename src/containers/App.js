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
                <Manager
                    { ...this.props }
                    // selectPage={ this.props.actions.selectPage }
                    // addPlayer={ this.props.actions.addPlayer }
                    // fetchPlayers={ this.props.actions.fetchPlayers }
                    // removePlayer={ this.props.actions.removePlayer }
                    // fetchRosters={ this.props.actions.fetchRosters }
                    // createRoster={ this.props.actions.createRoster }
                    // displayModal={ this.props.actions.displayModal }
                    // modalOpen={ this.props.modalOpen }
                    // roster={ this.props.roster }
                    // editingRoster={ this.props.editingRoster }
                    // rosters={ this.props.rosters }
                    // selectedPage={ this.props.selectedPage }
                />
            </div>
        )
    }
}

App.PropTypes = {
    actions: PropTypes.object
};

function mapStateToProps(state) {
    const { roster, rosters, selectedPage } = state.rosterReducer;
    const { modalOpen, editingRoster } = state.modalReducer;
    const { status } = state.statusReducer;
    return { roster, rosters, selectedPage, modalOpen, editingRoster, status };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);