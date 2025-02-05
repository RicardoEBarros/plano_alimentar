FROM node:20.14

WORKDIR /usr/src/plano_alimentar

COPY package.json .

RUN npm install --only=prod \
      && npm run build

EXPOSE 5000

CMD ["npm", "start"]
