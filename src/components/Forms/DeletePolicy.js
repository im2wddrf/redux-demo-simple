import React from 'react'
import { connect } from 'react-redux';
import { deletePolicy } from '../../actions'

class DeletePolicy extends React.Component {
    
    
    renderList() {
        return this.props.policies.map((name, i) => {
           return (
                <div className="item" id="delete-item" key={i}>
                    <div className="right floated content">
                        <div className="ui negative button" onClick={ () => this.props.deletePolicy(name) } >Delete</div>
                    </div>
                    <div className="content" id="content">
                        <div className="header" id="header">{name}</div>
                        <div className="description">This account was created on : { new Date().toLocaleDateString() }</div>
                    </div>
                </div>
           );
        });
    }
    
    render(){
        return (
            <div className="ui middle aligned divided list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { policies: state.policies }
}


export default connect(mapStateToProps, { deletePolicy })(DeletePolicy)
