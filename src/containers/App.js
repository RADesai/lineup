import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/actions';
import Manager from '../components/Manager'
import '../assets/scss/App.scss';

class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">Navbar</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="app-title">Lineup</div>
                <hr />
                <Manager
                    addPlayer={ this.props.actions.addPlayer }
                    fetchPlayers={ this.props.actions.fetchPlayers }
                    removePlayer={ this.props.actions.removePlayer }
                    createRoster={ this.props.actions.createRoster }
                    roster={ this.props.roster }
                />
            </div>
        )
    }
}

App.PropTypes = {
    actions: PropTypes.object
};

function mapStateToProps(state) {
    const { roster } = state.rosterReducer;
    const { status } = state.statusReducer;
    return { roster, status };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);