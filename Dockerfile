FROM node:latest

RUN npm install -g @angular/cli

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . . 

EXPOSE 4200

CMD ["npm", "start"]