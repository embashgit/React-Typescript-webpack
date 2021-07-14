FROM node:12.13.1-alpine

RUN npm install webpack -g

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

ENV NODE_ENV=production
ENV PORT=5001

CMD ["npm", "start" ]
EXPOSE 5001
