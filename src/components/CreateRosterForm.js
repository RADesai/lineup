import React from 'react'
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'
import '../assets/scss/Form.scss'

const getNameField = () =>
    <div className="form-field">
        <Field name="name" component="input" type="text" placeholder="Roster Name"/>
    </div>    

const CreateRosterForm = props => {
    const {
        createRoster,
        roster,
        handleSubmit,
        pristine,
        submitting
    } = props;

    return (
        <div className="row form-container form-create-roster">
            <div className="col-sm-12 create-roster">
                <form onSubmit={ handleSubmit(form => createRoster(form, roster)) }>
                    { getNameField() }
                    <button
                        type="submit"
                        disabled={ pristine || submitting }
                        className="btn">
                        <i className="fas fa-save"></i>
                    </button>
                </form>
            </div>
        </div>
    );
}

CreateRosterForm.propTypes = {
    createRoster: PropTypes.func,
    players: PropTypes.array
}
const fields = ['name'];

export default reduxForm({form: 'roster', fields})(CreateRosterForm)