import React from 'react'
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'
import '../assets/scss/Form.scss'

const AddPlayerForm = props => {
    const {
        addPlayer,
        handleSubmit,
        pristine,
        dirty,
        invalid,
        submitting
    } = props;

    
    const getNameField = () => <div className="form-field text-center">
        <Field name="name" component="input" type="text" placeholder="Player Name"/>
    </div>    

    return (
        <div className="row form-container form-add-player text-left">
            <div className="col-sm-12 col-md-6 col-lg-4 add-player">
                <span className="add-player-title">ADD PLAYER</span>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-8">
                <form onSubmit={ handleSubmit(form => addPlayer(form)) }>
                    { getNameField() }
                    <button
                        type="submit"
                        disabled={ (dirty && invalid) || submitting || pristine }
                        className="btn">
                        <i className="fas fa-plus-circle"></i>
                    </button>
                </form>
            </div>
        </div>
    );
}

AddPlayerForm.propTypes = {
    addPlayer: PropTypes.func
}
const fields = ['name'];

export default reduxForm({form: 'player', fields})(AddPlayerForm)