# Basic Redux Sample

This is a simple project that showcases a simple use case of the Redux store. The majority of the code came from Stephen Grider's course on Udemy (a course I highly [recommend](https://www.udemy.com/share/101Wz0CUMfclZQRHo=/)). 

I used Semantic UI for generating all of the UI elements. The structure of the webpage is not ideal. Though the web app design could be simplified greatly, I chose to go with creating three distinct "forms" to highlight the fact that we are executing a specific action on the Redux store.

What helped me to understand the relationship between actions and reducers was taking the concept from Grider's tutorial and wiring it up myself into a simple app. This repo is more as a simple tutorial for any beginner developer that want to see how a see how to set up a Redux store. I added a `console.log()` in the `ClientList.js` file so that developers can see the changes in the state / props as each action is executed (remember to open your browser's console window!).

## Instructions

In order to run the project locally on your machine, you can follow these steps: 

1. Download this repository. Instructions for downloading a repo can be found here. 

2. Using your machine's terminal or shell, enter the top level of the project directory. Run `npm install`. This will generate a `node_modules` folder that will contain the packages necessary for the react project.

3. Now run `npm start` and the project should run on a local server


## How it works

This is a simple project that showcases a basic use case of Redux. I am using Stephen Grider's "insurance company" model.This Redux store contains the following: 

* `accounting`: A number that describes the amount of funds that are available at this company.

* `policies`: An array of strings. Each string is a name of a person that is signed on to this company.

* `claimsHistory`: An array of objects. Each object describes an instance of when a person requests funds (makes a claim) to the company. Each object contains merely a name and an amount of money that is claimed. 

On the top menu bar, on the right hand side should be a dollar amount that the company holds. By default the company starts at one thousand. Each claim that is made will subtract funds from the total.

## Description of the `/actions`

There are only three actions, all of which are described in the `/src/actions` folder. They are the following: 

* create a claim: have somone draw funds from the company.
* create a policy: adding someone to the company
* delete a policy: removing someone's name from the company



## Description of the `/reducers`

The reducers are described in the `/src/reducers` folder. If an action is received, it will act upon the Redux store to modify the data. Each reducer has a comment that briefly describes how it receives an action and what it is supposed to do with it.