FROM node:20.12.2
COPY . .


CMD ["npm" ,"install" ,"next" ,"npm", "run", "dev"]