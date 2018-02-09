import React from 'react'
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'
import '../assets/scss/Form.scss'

const AddPlayerForm = props => {
    const {
        addPlayer,
        handleSubmit,
        dirty,
        invalid,
        submitting
    } = props;

    
    const getNameField = () => <div className="form-field text-center">
        <Field name="name" component="input" type="text" placeholder="Player Name"/>
    </div>    

    return (
        <div className="row">
            <div className="col-sm-12 form-container form-add-player text-center">
                <form onSubmit={ handleSubmit(form => addPlayer(form)) }>
                    <button
                        type="submit"
                        disabled={ (dirty && invalid) || submitting }
                        className="btn">
                        <i className="fas fa-plus-circle"></i>
                    </button>
                    { getNameField() }
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