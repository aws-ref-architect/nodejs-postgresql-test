FROM node:lts-iron
WORKDIR /workspace
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
COPY ./public/* ./public/
COPY ./src/* ./app/
RUN npm ci
