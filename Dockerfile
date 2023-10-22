FROM node:18
WORKDIR /app
COPY . .
WORKDIR /app/client
RUN npm ci
RUN npm install -g @angular/cli
RUN ng build
WORKDIR /app/server
RUN npm ci
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
