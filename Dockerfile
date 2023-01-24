FROM node:16-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN npm ci --only=prod

COPY . .

CMD ["npm", "start"]
