FROM node:15.11.0-alpine3.10

RUN mkdir /app
WORKDIR /app

RUN apk update && \
    apk upgrade && \
    apk add git

RUN apk add --no-cache bash
RUN npm install -g react-native-cli

ADD package.json package.json


RUN npm install -g expo expo-cli --loglevel=error