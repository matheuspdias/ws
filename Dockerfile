
FROM node:11-alpine

WORKDIR /node-app

COPY package.json .

RUN npm install

COPY . . 

EXPOSE 8000

CMD ["npm", "start"]