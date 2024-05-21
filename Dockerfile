FROM node:18.16.1

COPY . .

RUN npm install

CMD ["npm", "run", "start"]
