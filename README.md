This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

In addition to what Create React App provides I've put together this
little project to add some of the other things I find myself using in
most apps I create.  Below is a list of libraries and features:

## Frontend
* bootstrap
* lodash
* react
* react-dom
* react-redux
* react-router-dom
* redux
* redux-devtools-extension
* whatwg-fetch

## Backend
* cross-env
* hapi
* inert (static files)
* winston (logging)

## Testing
* chai
* enzyme
* enzyme-adapter-react-16
* fetch-mock
* jest-cli
* mocha
* nyc (code coverage)
* react-test-renderer
* redux-mock-store
* sinon

## Utilities
* eslint
* eslint-config-google
* eslint-plugin-react
* inspect-process (debugging)
* ngrok (secure tunnel)
* various TypeScript types for an editor or IDE (I use emacs)

# Getting Started

``` shell
$ git clone git@github.com:socketwiz/web-starter-kit.git <my-new-project>
```

The simplest way to move forward from here requires `tmux` to be installed.

``` shell
$ ./dev
```

If you don't want to bother with `tmux` then you can run everything manually.

Task | Description
-----|------------
npm start | Start the create-react-app server for frontend development
npm run server | Start the hapijs server for backend development
npm run test:client | Start the frontend test server
npm run test:server | Start the backend test server

All of these commands watch for changes and restart accordingly with
the exception of the server, that one has to be restarted manually.
Here is a list of other useful scripts:

Task | Description
-----|------------
npm run build | Build the frontend for production deployment
npm run lint | Run eslint against the code base
npm run test:client:coverage | Run the coverage tool over the frontend code base
npm run test:server:coverage | Run the coverage tool over the backend code base
npm run test:client:debug | Run the frontend test runner in debug mode
npm run test:server:debug | Run the backend test runner in debug mode

To enable the tunnel run:

``` shell
$ ENABLE_TUNNEL=1 npm run server
```

Which should print out a url something like:

``` shell
info: Proxy: https://xxxxx.ngrok.io
```

Where the 5 x's are replaced with an id.  You can then hand the url to
whomever might need to access your site remotely.
