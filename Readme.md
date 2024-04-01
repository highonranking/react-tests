# Dev Testing Types
- Unit Testing => test a component in isolation
- Integration Testing => test integration of components
- End to end Testing  => Test react app, complete user journey on our app.

## Libraries
- React Testing Library


## Setting up
    - It uses Jest - Js Testing Framework  
    - @testing-library/react
    - install Jest
    - in case we are not using create-react-app, install dependencies of babel (availbale on jest website)
    - Foolow process of Using Babel @ jest website
    - I am using parcel in my project, so I have to cnfigure my Parcel configuration to set up Babel for Jest
    - At Parcel website, Under Js section, read more about it
    - Basically we want our config to work and not default one by parcel, (disable babel transpilation).
    - create .parcelrc file, and update the code given in parcel website -> js  -> babel -> with other tools


## jest configuration

- npx jest --init 
- we'll use jsdom => env to execute tests
- well use babel
- install jsdom library ß


## run test cases

- npm run test we are using jest



## others

- Install @babel/preset-react -- make JSX work in Test cases, then include @babel/preset-react inside babel
- Install @testing-library/jest-dom