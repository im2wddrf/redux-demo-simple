import React, { Component } from 'react';
import CreatePolicy from './Forms/CreatePolicy';
import CreateClaim from './Forms/CreateClaim';
import DeletePolicy from './Forms/DeletePolicy';


// import { createPolicy, deletePolicy, createClaim } from '../actions';
import { connect } from 'react-redux';
import { selectForm } from '../actions';


class Form extends Component {
    
    render() {
        switch(this.props.form) {
            case 'Create Policy':
                return (
                    <CreatePolicy/>
                );
            case 'Create Claim':
                return (
                    <CreateClaim/>
                );
            case 'Delete Policy':
                return (
                    <DeletePolicy/>
                );
            default:
                return (
                    <div className="ui container segment">
                        Please select a form!
                    </div>
                );
        }
    }
}

const mapStateToProps = (state) => {
    return { form: state.form, selectForm: selectForm };
}

export default connect(mapStateToProps, { selectForm })(Form);