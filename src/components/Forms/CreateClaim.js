import React from 'react';
import { createClaim, selectForm } from '../../actions';
import { connect } from 'react-redux';




class CreateClaim extends React.Component {
    
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        
    }
    
    
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.createClaim(this.state.name, parseFloat(this.state.amount));
        this.props.selectForm('')
    }
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    
    
    render(){
        return (
            <div className="ui container segment">
                <form className="ui form" onSubmit={ this.handleSubmit } onChange={ this.handleChange }>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" placeholder="Name" name="name" />
                    </div>
                    <div className="field">
                        <label>Amount to Collect</label>
                        <input type="text" placeholder="0.00" name="amount" />
                    </div>
    
                    <div className="ui buttons">
                        <button className="ui button" type="reset" onClick={() => this.props.selectForm('')}>Cancel</button>
                        <div className="or"></div>
                        <button className="ui positive button">Create Claim</button>
                    </div>
    
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        form: state.form,
        accounting: state.accounting,
        policies: state.policies
    }
}


export default connect(mapStateToProps, { createClaim, selectForm })(CreateClaim);
