// reducers
import { combineReducers } from 'redux';

let total = 1000;

let policiesHistory = [
    'Chris',
    'Kevin',
    'Luke',
    'Evan',
    'Austin',
    'Kiley',
    'Ritchie',
    'Nathan'
]


// if user creates a claim, then it will call this reducer
export const claimsHistoryReducer = (oldListOfClaims = [], action) => {
    switch(action.type) {
        case 'CREATE_CLAIM':
            return [...oldListOfClaims, action.payload];
        default: 
            return oldListOfClaims;
    }
}

// this reducer keeps how much money this company has in its pool of funds
export const accountingReducer = (account = total, action) => {
    switch(action.type) {
        case 'CREATE_CLAIM':
            return account - action.payload.amountOfMoneyToCollect;
        case 'CREATE_POLICY':
            return account + action.payload.amount;
        default:
            return account;
    }
}

// this reducer handles the array of names that are associated with this insurance company
export const policiesReducer = (listOfPolicies = policiesHistory, action) => {
    switch(action.type) {
        case 'CREATE_POLICY':
            return [...listOfPolicies, action.payload.name];
        case 'DELETE_POLICY':
            return listOfPolicies.filter(name => name !== action.payload.name);
        default:
            return listOfPolicies;
    }
}

// this reducer is for creating a web page form, not part of the original example from the Udemy course
export const selectFormReducer = (form = '', action) => {
    if (action.type === 'SELECT_FORM') {
        return action.payload;
    }

    return form;
}




// combine all of the reduces here so that it can be imported into the App props
export default combineReducers({
    accounting: accountingReducer,
    claimsHistory: claimsHistoryReducer,
    policies: policiesReducer,
    form: selectFormReducer
});