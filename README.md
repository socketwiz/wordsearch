This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

In addition to what Create React App provides I've put together this
little project to add some of the other things I find myself using in
most apps I create.  Below is a list of libraries and features:

## Frontend
* bootstrap
* helmet (update head information)
* lodash
* react
* react-dom
* react-redux
* react-router-dom
* react-snap (create static pages for SEO optimization)
* redux
* redux-devtools-extension
* whatwg-fetch

## Backend
* loopback

## Testing
* chai
* enzyme
* enzyme-adapter-react-16
* fetch-mock
* jest-cli
* mocha
* react-test-renderer
* redux-mock-store
* sinon

## Utilities
* cross-env
* eslint
* eslint-config-google
* eslint-plugin-react
* inspect-process (debugging)
* ngrok (secure tunnel)
* various TypeScript types for an editor or IDE (I use emacs)

# Getting Started

``` shell
$ git clone git@github.com:socketwiz/web-starter-kit.git <my-new-project>
$ cd <my-new-project>
$ npm install
```

The simplest way to move forward from here requires `tmux` to be installed.

``` shell
$ ./dev
```

If you don't want to bother with `tmux` then you can run everything manually.

From the root directory:

Task | Description
-----|------------
npm start | Start the loopback server for backend development
npm start:debug | Start the loopback server in debug mode
npm run test | Start the backend test server
npm run lint | Run eslint against the code base

From the frontend directory:

Task | Description
-----|------------
npm start | Start the create-react-app server for frontend development
npm run test | Start the frontend test server
npm run build | Build the frontend for production deployment
npm run lint | Run eslint against the code base
npm run test:client:coverage | Run the coverage tool over the frontend code base
npm run test:client:debug | Run the frontend test runner in debug mode

All of the commands above watch for changes and restart accordingly.  

To enable the tunnel run:

``` shell
$ ENABLE_TUNNEL=1 npm run server
```

Which should print out a url something like:

``` shell
Proxy: https://xxxxx.ngrok.io
```

Where the 5 x's are replaced with an id.  You can then hand the url to
whomever might need to access your site remotely.

# Deployment

The simplest way is to use the docker scripts I've provided and deploy
them somewhere like AWS. To run the image locally:

``` shell
$ docker-compose up -d
```

Then navigate to http://localhost and you should see your app assuming
you're running Docker for Mac.  If you're running Docker Toolbox or
something else the localhost address may be something different.

# Test debugging

If you would like to debug the tests using the Chrome dev tools find a
location in one of your tests that you would like to break on and add
the text `debugger;`. Next run one of:

``` shell
$ npm run test:client:debug # for frontend
$ npm run test:server:debug # for backend
```

It will print a message to the console then wait.  Navigate to the
following address: `chrome://inspect/`. Scan the page for the word
"Target" and you will find your script, beneath that you will find a
link called "inspect", click that link and it will bring up the dev
tools paused at the beginning. On the `Sources` tab click the "Resume
Execution" button and it "should" pause on your breakpoint.
