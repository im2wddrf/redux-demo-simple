import React from 'react';
import { selectForm } from '../actions';
import { connect } from 'react-redux';


import ClientList from './ClientList';
import Form from './Form';

class App extends React.Component {
    
    
    render() {
        
        
        return (
            <div>
                <div className="ui inverted segment">
                    <div className="ui inverted secondary pointing menu container">
                        <a className="active item" href="#/">
                            Main
                        </a>
                        <a className="item" href="#/">
                            About
                        </a>
                        <div className="right menu">
                            <i className="dollar sign icon" style={{alignSelf: 'center'}}></i>
                            <p style={{alignSelf: 'center'}}>{this.props.accounting}</p>
                        </div>
                    </div>
                </div>

                <div className="ui raised container segment">
                    <div className="ui items">
                        <ClientList />
                    </div>
                </div>
        
                <div className="ui raised container segment">
                    <div>
                        <button className="ui inverted primary button" onClick={ () => this.props.selectForm('Create Policy') }>Create Policy</button>
                        <button className="ui inverted green button" onClick={ () => this.props.selectForm('Create Claim') }>Create Claim</button>
                        <button className="ui inverted secondary button" onClick={ () => this.props.selectForm('Delete Policy') }>Delete Policy</button>
                        <button className="negative ui button" onClick={() => this.props.selectForm('')}>Clear Form</button>
                    </div>
                    
                    <Form />
    
                </div>


    
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return { form: state.form, accounting: state.accounting };
}

export default connect(mapStateToProps, { selectForm })(App);