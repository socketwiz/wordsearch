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
