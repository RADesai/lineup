import React from 'react'
import PropTypes from 'prop-types';
import '../assets/scss/ReturnButton.scss'

const ReturnButton = ({ selectPage }) =>
    <div
        className="col-sm-6 col-lg-3 text-center btn-back"
        onClick={ () => selectPage('MANAGER') }
    >
        BACK
    </div>

ReturnButton.propTypes = {
    selectPage: PropTypes.func
}

export default ReturnButton