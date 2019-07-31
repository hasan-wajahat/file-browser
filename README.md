This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Hasan Wajahat Folder Browser App

- App made for Prophecy labs
---

To run the project run

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To run the test:

### `npm test`

## Possible Improvmenets

- Improve testing, currently only main parts of App.js are tested. But those test gives the model for how rest of the tests will be written.

- Current system keeps adding items to array rather than having a nested object. So at very large scales there might be slight performance issues.

- Currently I felt no need to add redux, because the app was simple enough. But since the core logic is written using useReducer, adding redux to this will be trivial.

