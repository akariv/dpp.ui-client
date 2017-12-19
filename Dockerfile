FROM node:8-alpine

COPY . /app/
RUN apk add --update git
RUN cd /app/ && npm install && npm run dist-build

EXPOSE 8000

CMD cd /app/ && npm run serve
