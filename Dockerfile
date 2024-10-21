FROM node:lts-iron
WORKDIR /workspace
COPY .env.local ./
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
COPY database/* ./database/
COPY index.js ./index.js
COPY knexfile.js ./knexfile.js
RUN npm ci
