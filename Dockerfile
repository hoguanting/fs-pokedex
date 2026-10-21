FROM node:24-bookworm-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

ENV PORT=5001
EXPOSE 5001

CMD ["npm", "run", "start-prod"]
