FROM node:20.14

WORKDIR /usr/src/plano_alimentar

COPY package.json package-lock.json ./

RUN npm ci \
    npm prune --omit=dev

COPY ./dist ./dist

EXPOSE 5000

CMD ["npm", "start"]
