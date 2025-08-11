FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Запускаем dev сервер, слушая на всех интерфейсах (для доступа из контейнера)
CMD ["npm", "run", "dev", "--", "--host"]