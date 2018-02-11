import React from 'react'
import PropTypes from 'prop-types';
import '../assets/scss/ReturnButton.scss'

const ReturnButton = ({ selectPage }) =>
    <div className="text-center">
        <div
            className="col-sm-6 col-lg-3 btn-back"
            onClick={ () => selectPage('MANAGER') }
        >BACK</div>
        <div className="col-sm-12 create-roster-title">
            Create Roster
        </div>
    </div>

ReturnButton.propTypes = {
    selectPage: PropTypes.func
}

export default ReturnButton