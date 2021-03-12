FROM node:14.15.3

ARG VERSION

COPY . .

EXPOSE 8081 8082 8083 8080 

CMD ["sh", "./startup.sh"]