import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { stat } from 'fs';

class ClientList extends Component {
        
    
    renderClaims (name) {
        let total = 0;
        let amount_array = [];

        this.props.claimsHistory.map(claim => claim.name === name ? amount_array.push(claim.amountOfMoneyToCollect) : amount_array.push(0));
        amount_array.length > 0 ? total = amount_array.reduce((a, b) => a + b) : total = 0;

        return total;
    }
    
    renderList() {
        return this.props.policies.map((name, i) => {
            return (
                <div className="content column" key={i} style={{marginBottom: 25}}>
                        <div className="header">{ name }</div>
                        <div className="description">Amount taken: { 
                            this.renderClaims(name)
                        } 
                        </div>
                        <div className="extra">Account created on <br/> { new Date().toLocaleDateString() }</div>
                </div>
            );
        });
    }

    
    
    render() {
        // might install a helper function to determine column stacks depending on how many people are in the array
        const stack = 'four';
        
        // keeping this console log for developers who would like to see how the state / props changes with each action
        console.log(this.props);
        return (
            <div className={`ui item ui ${stack} column doubling stackable grid container`} style={{padding: 15}}>
                { this.renderList() }
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return { 
        policies: state.policies, 
        accounting: state.accounting, 
        claimsHistory: state.claimsHistory
     }
}


export default connect(mapStateToProps)(ClientList);