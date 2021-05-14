## Redux Project

### Refresher on REDUX concept

Imagine we have our main APP which contains lots of components and if we have a component (LOGIN where we have all user details) and we now need these user details in a different component which can in level 1, 2, 3 or so on. But we can't afford this as it indicates poor optimization (not a clean code) and causes term known as "PROP DRILLING".

## So to avoid this we use "REDUX" instead.

How it works is simple: REDUX is sort of acting as a DATA-LAYER or GLOBAL-STORE and it wraps around your main APP. Which has that same user details that can be provided or call by any component in our APP.
Also have one more advantage of splitting itself into different slices where we can say that all information regarding userDetails is responsible for Slice-1, Slice-2 might be to take care items in a cart, Third Slice might be responsible to take care of prices.

How it functions fundamentally?
To PULL from our DATA-LAYER or GLOBAL-STORE to a component we use "selector".
To PUSH data from component to our DATA-LAYER or GLOBAL-STORE we use "dispatch action".

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
