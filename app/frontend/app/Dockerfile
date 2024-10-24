FROM node:lts-iron
WORKDIR /workspace
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
COPY ./src ./src
COPY ./public ./public
RUN npm install
RUN npm run build
RUN npm install --global --unsafe-perm serve
CMD ["serve", "-s", "./build", "-p", "8080"]
