# Weather API

API made with 3 services, using axios to access and use third party APIs such as:
- Mapbox
- Open Weather Map

The API can look up the weather using mapbox's ID, Longitude and Latitude or City name.

The responses are only in JSON, it has error handlers to send a JSON error message in case an user access a route that doesn't exist.

The API base used is located in this repository and it's called **base-user-api v0.0.1**

## Used dependencies

- axios 1.3.2 (To use 3rd party APIs)
- dotenv 16.0.3 (Set the environment variables to be used in config to be imported in other files)
- express 4.18.2 (Set the server)
- morgan 1.10.0 (To get in the console or log all the HTTP route requests from users)
- swagger-ui-express 4.6.0 (To make the documentation of the API)
- winston 2.0.20 (To create loggers in the console if the NODE_ENV is development or create a log file if production server)

### Dev dependencias

- nodemon (Re start the server everytime the file saves)