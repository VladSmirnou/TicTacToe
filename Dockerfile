FROM node:22.14.0-alpine3.20

WORKDIR /project

COPY . .

RUN yarn

ENTRYPOINT exec yarn dev