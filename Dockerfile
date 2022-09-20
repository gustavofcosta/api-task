FROM node:16.15.1-alpine

LABEL version="1.0" description='node image'

WORKDIR /usr/app

COPY package*.json yarn.lock ./

COPY prisma ./prisma/

COPY .env ./

COPY tsconfig.json ./

COPY . .

RUN yarn

RUN yarn prisma generate

EXPOSE 4002

CMD [ "yarn", "server" ]
