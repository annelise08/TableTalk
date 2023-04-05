# TableTalk-solo-project
TableTalk lets you share restaurant recommendations with friends.

Steps:

SETTING UP WEBPACK
- Create git ignore file to not track package-lock/node modules
- Create a package.json file to track dependencies
- Install React
- Install React-Dom
- Install webpack and webpack-dev-server
- Install babel-core as dev dependency so we can use it as a transpiler
- Install other babel packages
- Install html-webpack-plugin

SETTING UP SERVER
- Installed Express
- Updated package json scripts based on build tools module to run nodemon in development mode

SETTING UP BACKEND
- Set up SQL database
- Set up route and middleware to query database

SETTING UP FRONT END
- Made a request to server to access data
- Reccommendations page creates and loads recc cards
- Installed bootstrap for easier formatting
- Updated webpack rules to include bootstrap
- Imported bootstrap to styles.scss
- Figured out I need to use React Bootstrap, installed that
- Was able to get React Bootstrap working by requiring in css module in entry point(index.js file)
- Added style sheet by importing to index.js