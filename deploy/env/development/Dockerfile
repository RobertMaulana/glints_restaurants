FROM node:8.9.3-alpine

RUN mkdir -p /opt/webapp
RUN apk add --no-cache libc6-compat

WORKDIR /opt/webapp
COPY . /opt/webapp
COPY deploy/env/development/dotenv /opt/webapp/.env

RUN yarn install

CMD [ "yarn", "immutable-start" ]
