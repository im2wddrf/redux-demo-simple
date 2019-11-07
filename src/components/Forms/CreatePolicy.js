import React from 'react';
import { createPolicy, selectForm } from '../../actions';
import { connect } from 'react-redux';


class CreatePolicy extends React.Component {
    
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        
    }
    
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.createPolicy(this.state.name, parseFloat(this.state.amount));
        this.props.selectForm('')
    }
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        
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
                        <label>Starting Amount</label>
                        <input type="text" placeholder="0.00" name="amount" />
                    </div>
    
                    <div className="ui buttons">
                        <button className="ui button" type="reset" onClick={() => this.props.selectForm('')}>Cancel</button>
                        <div className="or"></div>
                        <button className="ui blue button">Create Policy</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        form: state.form, 
        policies: state.policies
     }
}

export default connect(mapStateToProps, { createPolicy, selectForm })(CreatePolicy);
