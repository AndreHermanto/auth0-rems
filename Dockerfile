FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN apk add  g++ gcc libgcc libstdc++ linux-headers make python
RUN npm install -g node-gyp 
RUN npm install
RUN npm rebuild hummus --build-from-source

COPY . .

EXPOSE 3333
CMD [ "npm", "start" ]