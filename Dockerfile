FROM node:14

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

RUN cd extrem-startup-front && npm run build

CMD [ "node", "." ]