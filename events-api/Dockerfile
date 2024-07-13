# Base image
FROM node:20

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "run", "start:prod" ]

EXPOSE 3002
