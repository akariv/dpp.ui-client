FROM node:8-alpine

COPY . /app/
RUN apk add --update git
RUN cd /app/ && npm install --dev && npm run build

EXPOSE 4200

CMD cd /app/ && npm start
