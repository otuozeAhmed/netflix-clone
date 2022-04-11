FROM node:alpine

LABEL author=Otuoze

WORKDIR '/app'

COPY package.json '/app'
RUN npm install
COPY './app' '/app'

CMD ["npm", "start"]


