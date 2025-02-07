FROM node:20.14

WORKDIR /usr/src/plano-alimentar

COPY package.json ./

RUN npm install