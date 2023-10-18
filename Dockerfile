FROM node:18
WORKDIR /app
COPY . .
WORKDIR /app/server
RUN npm ci
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
