FROM node:carbon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install ruby (for SASS)
RUN apt-get update
RUN apt-get install -y ruby-full
RUN gem install sass

# Install app dependencies
COPY . /usr/src/app
RUN rm -rf /usr/src/app/node_modules
RUN rm -rf /usr/src/app/frontend/node_modules
RUN cd /usr/src/app && npm install
RUN cd /usr/src/app/frontend && npm install
RUN cd /usr/src/app/frontend && npm run build

ENV NODE_ENV="production"
EXPOSE 8000

CMD [ "npx", "pm2-docker", "server" ]
